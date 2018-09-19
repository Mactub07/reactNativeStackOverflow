import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { constants } from '../../constants';
import { registerPage } from '../../services/Navigation';
import { WithLocalization } from '../../services/Localization';
import DefaultBackImage from '../DefaultBackImage/DefaultBackImage';
import LoadingPage from '../../scenes/LoadingPage/containers/LoadingPage';
import AuthPage from '../../scenes/AuthPage/containers/AuthPage';
import MainPage from '../../scenes/MainPage/containers/MainPage';
import LogOutPage from '../../scenes/LogOutPage/containers/LogOutPage';
import StackOverflowPage from '../../scenes/StackOverflowPage/containers/StackOverflowPage';
import Drawer from '../Drawer/containers/DrawerContent';

const defaultHeaderOptions = {
    navigationOptions: {
        headerStyle: { backgroundColor: constants.COLOR_ACCENT },
        headerTintColor: constants.COLOR_PRIMARY,
        headerTitleStyle: { color: constants.COLOR_PRIMARY },
        headerBackImage: <DefaultBackImage />
    }
};

export const pages = {
    [LoadingPage.routeKey]: registerPage(LoadingPage),
    [AuthPage.routeKey]: registerPage(AuthPage),
    [MainPage.routeKey]: registerPage(MainPage),
    [LogOutPage.routeKey]: registerPage(LogOutPage),
    [StackOverflowPage.routeKey]: registerPage(StackOverflowPage)
};

/** App screens wrapped with drawer navigator element */
const DrawerAppNavigator = createDrawerNavigator(
    {
        App: {
            screen: createStackNavigator(
                {

                     [pages.AuthPage.key]: pages.AuthPage.component,
                     [pages.MainPage.key]: pages.MainPage.component,
                     [pages.LogOutPage.key]: pages.LogOutPage.component,
                     [pages.StackOverflowPage.key]: pages.StackOverflowPage.component
                },
                { ...defaultHeaderOptions }
            ),
            navigationOptions: ({ navigation }) => {
                const routeName = navigation.state.routes[navigation.state.index].routeName;
                const routeParams = navigation.state.routes[navigation.state.index].params;
                const drawerLockMode = routeParams && routeParams.drawerLockMode
                    ? routeParams.drawerLockMode
                    : pages[routeName] && pages[routeName].drawerLockMode
                        ? pages[routeName].drawerLockMode
                        : 'unlocked';

                return { drawerLockMode };
            }
        }
    },
    {
        contentComponent: props => (
            <WithLocalization renderWithLocalization={texts => <Drawer {...props} texts={texts} />} />
        )
    }
);
DrawerAppNavigator.navigationOptions = { header: null };

/** Main application router */
export default createStackNavigator({
    [pages.LoadingPage.key]: {
        screen: pages.LoadingPage.component,
        navigationOptions: { header: null }
    },
    DrawerNavigator: DrawerAppNavigator
});
