import React from 'react';
import { View, TouchableHighlight, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as LocalizationActions } from '../../../services/Localization/actions';
import { actions as AuthActions } from '../../../services/Auth/actions';
import { WithLocalization } from '../../../services/Localization/index';
import { Title } from '../../../components/TextComponents/index';
import styles from '../styles/styles';
import { HeaderLeft, HeaderMenuImage } from '../../../components/Header';
import { StackActions, NavigationActions } from 'react-navigation';

class LogOutPage extends React.PureComponent {
    static routeKey = 'LogOutPage';
    static navigationOptions = ({ navigation }) => (
        {
            headerTitle: (
                <WithLocalization renderWithLocalization={texts =>
                    <Title text={texts.LogOutTitle} containerStyle={{ margin: 0 }} />
                }
                />
            ),
            headerLeft: (
                <HeaderLeft onPress={navigation.openDrawer}>
                    <HeaderMenuImage />
                </HeaderLeft>
            )
        }
    );

    render() {
        return (
            <View style={styles.container}>
                <Title text={this.props.texts.GoodBye} />
                <TouchableHighlight onPress={this.logOut} style={styles.submitButtonStyle}>
                    <Title text={this.props.texts.LogOutTitle} />
                </TouchableHighlight>

            </View>
        );
    }

    logOut = () => {
        const resetAction = StackActions.reset({
            key: null,
            index: 0,
            actions: [ NavigationActions.navigate({ routeName: 'LoadingPage' }) ]
        });
        AsyncStorage.clear();
        this.props.setLanguage('en');
        this.props.setAuthData('', '');
        this.props.navigation.dispatch(resetAction);
    }
}

const mapStateToProps = state => ({
    userName: state.auth.get('userName', ''),
    password: state.auth.get('password', ''),
    language: state.localization.get('language', '')
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setLanguage: LocalizationActions.setLanguage,
    setAuthData: AuthActions.setAuthData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LogOutPage);
