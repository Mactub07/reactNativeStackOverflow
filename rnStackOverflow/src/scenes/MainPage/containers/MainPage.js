import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as LocalizationActions } from '../../../services/Localization/actions';
import { actions as AuthActions } from '../../../services/Auth/actions';
import { WithLocalization } from '../../../services/Localization/index';
import { Title } from '../../../components/TextComponents/index';
import ChangeLocalizationBlock from '../../AuthPage/components/ChangeLocalizationBlock';
import styles from '../styles/styles';
import { HeaderLeft, HeaderMenuImage } from '../../../components/Header';

class MainPage extends React.PureComponent {
    static routeKey = 'MainPage';
    static navigationOptions = ({ navigation }) => (
        {
            headerTitle: (
                <WithLocalization renderWithLocalization={texts =>
                    <Title text={texts.mainTitle} containerStyle={{ margin: 0 }} />
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
                <Title text={`${this.props.texts.Hello}, ${this.props.userName} !`} />
                <ChangeLocalizationBlock
                    texts={this.props.texts}
                    setLanguage={this.props.setLanguage}
                    language={this.props.language}
                />
            </View>
        );

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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
