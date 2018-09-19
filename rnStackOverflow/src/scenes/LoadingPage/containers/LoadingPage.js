import React from 'react';
import { View, Animated, AsyncStorage } from 'react-native';
const LogoBg = require('../../../assets/loading-bg.jpg');
const LogoIcon = require('../../../assets/logo-icon.png');
import { NavigationActions, StackActions } from 'react-navigation';
import { actions as AuthActions } from '../../../services/Auth/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as LocalizationActions } from '../../../services/Localization/actions';
import styles from '../styles/styles';

class LoadingPage extends React.PureComponent {
    static routeKey = 'LoadingPage';

    fadeInUp= new Animated.Value(-1);
    bgImageOpacity= new Animated.Value(1);

    componentDidMount () {
        this._processAuthData();
        this._processLocalizationData();
        this._startAnimation();
    }

    render() {
        return (
            <View style={styles.container}>
                    <Animated.Image
                        resizeMode={'cover'}
                        source={LogoBg}
                        style={[ styles.bgImage, { opacity: this.bgImageOpacity } ]}
                    />
                    <Animated.Image
                        resizeMode={'contain'}
                        source={LogoIcon}
                        style={[
                            styles.logo,
                            {
                                transform: [
                                    {
                                        translateY: this.fadeInUp.interpolate({
                                            inputRange: LoadingPage.logoTransformInputRange,
                                            outputRange: LoadingPage.logoTransformOutputRange
                                        })
                                    }
                                ],
                                opacity: this.fadeInUp.interpolate({
                                    inputRange: LoadingPage.logoOpacityInputRange,
                                    outputRange: LoadingPage.logoOpacityOutputRange
                                })
                            }
                        ]}
                    />
            </View>
        );
    }

    _processAuthData = async () => {
        try {
            const authData = await AsyncStorage.getItem('auth');
            if (authData !== null) {
                const [ userName, password ] = authData.split('/');
                this.props.setAuthData(userName, password);
            }
        } catch (error) {
            __DEV__ && console.warn(error);
        }
    };

    _processLocalizationData = async () => {
        try {
            const ln = await AsyncStorage.getItem('ln');
            if (ln !== null) {
                this.props.setLanguage(ln);
            }
        } catch (error) {
            __DEV__ && console.warn(error);
        }
    };

    /**
     * start animation handler;
     * @private
     */
    _startAnimation() {
        const { animationDuration, animationDelay } = LoadingPage;

        //Animated.sequence([ Animated.delay(animationDelay) ]).start();

        Animated.sequence([
            Animated.delay(animationDelay),
            Animated.timing(this.fadeInUp, {
                toValue: 0,
                duration: animationDuration
            }),
            Animated.delay(animationDelay),
            Animated.timing(this.fadeInUp, {
                toValue: 1,
                duration: animationDuration
            }),
            Animated.timing(this.bgImageOpacity, {
                toValue: 0,
                duration: animationDuration
            })
        ]).start(this._redirectToNextPage);
    }

    _redirectToNextPage = () => {
        const isAuthorized = this.props.userName && this.props.password;
        const route = isAuthorized ? 'MainPage' : 'AuthPage';
        this.props.navigation.replace('DrawerNavigator', {}, NavigationActions.navigate({
            routeName: 'App',
            action: StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate(
                        { routeName: route }
                    )
                ]
            })
        }));
    };

    static logoTransformInputRange = [ -1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1 ];

    static logoTransformOutputRange = [ 50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50 ];

    static logoOpacityInputRange = [ -1, -0.5, 0, 0.5, 1 ];

    static logoOpacityOutputRange = [ 0, 0.5, 1, 0.5, 0 ];

    static animationDuration = 600;

    static animationDelay = 600;
}

const mapStateToProps = state => ({
    userName: state.auth.get('userName', ''),
    password: state.auth.get('password', '')
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setLanguage: LocalizationActions.setLanguage,
    setAuthData: AuthActions.setAuthData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);
