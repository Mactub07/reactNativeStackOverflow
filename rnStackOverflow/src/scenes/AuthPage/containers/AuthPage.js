import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as LocalizationActions } from '../../../services/Localization/actions';
import { actions as AuthActions } from '../../../services/Auth/actions';
import { WithLocalization } from '../../../services/Localization/index';
import { Title } from '../../../components/TextComponents/index';
import styles from '../styles/styles';
import ChangeLocalizationBlock from '../components/ChangeLocalizationBlock';
import AuthBlock from '../components/AuthBlock';
import MainPage from '../../MainPage/containers/MainPage';

class AuthPage extends React.PureComponent {
    static routeKey = 'AuthPage';
    static navigationOptions = () => (
        {
            headerTitle: (
                <WithLocalization renderWithLocalization={texts =>
                    <Title text={texts.authTitle} containerStyle={{ margin: 0 }} />
                }
                />
            )
        }
    );

    render() {

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Title text={this.props.texts.wellCome} />
                <ChangeLocalizationBlock
                    texts={this.props.texts}
                    setLanguage={this.props.setLanguage}
                    language={this.props.language}
                />
                <AuthBlock
                    texts={this.props.texts}
                    setAuthData={this.props.setAuthData}
                    navigateToMainPage={this.navigateToMainPage}
                />
            </ScrollView>
        );
    }

    navigateToMainPage = () => this.props.navigation.navigate(MainPage.routeKey);
}

const mapStateToProps = state => ({ language: state.localization.get('language', 'en') });

const mapDispatchToProps = dispatch => bindActionCreators({
    setLanguage: LocalizationActions.setLanguage,
    setAuthData: AuthActions.setAuthData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
