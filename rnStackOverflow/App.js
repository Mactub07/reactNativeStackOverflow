import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import NavigationService from './src/services/Navigation/NavigationService';
import Router from './src/components/Router';
import { LocalizationProvider } from './src/services/Localization';
import { defaultTexts, defaultLocale } from './src/translations';
import { YellowBox } from 'react-native';

export default class App extends React.Component {
    componentDidMount() {
        // react-native warning bug , see https://github.com/facebook/react-native/issues/20841
        YellowBox.ignoreWarnings([ 'Require cycle:' ]);
    }

    render() {
        return (
            <Provider store={store}>
                    <LocalizationProvider defaultTexts={defaultTexts} defaultLocale={defaultLocale}>
                        <Router ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
                    </LocalizationProvider>
            </Provider>
        );
    }
}
