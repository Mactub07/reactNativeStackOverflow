import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Title } from '../../TextComponents/index';
import LogOutPage from '../../../scenes/LogOutPage/containers/LogOutPage';
import MainPage from '../../../scenes/MainPage/containers/MainPage';
import StackOverflowPage from '../../../scenes/StackOverflowPage/containers/StackOverflowPage';
import styles from '../styles/styles';

export default class DrawerContent extends React.PureComponent {
    render() {

        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.goToMainPage}>
                    <Title text={this.props.texts.mainTitle} />
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goToStackOverflowPage}>
                    <Title text={this.props.texts.StackOverflowTitle} />
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goToLogOutPage}>
                    <Title text={this.props.texts.LogOutTitle} />
                </TouchableHighlight>
            </View>
        );
    }

    /**
     * Navigate to mainPage
     */
    goToMainPage = () => this.props.navigation.navigate(MainPage.routeKey);

    /**
     * Navigate to stackOverflow page.
     */
    goToStackOverflowPage = () => this.props.navigation.navigate(StackOverflowPage.routeKey);

    /**
     * Navigate to logOut page.
     */
    goToLogOutPage = () => this.props.navigation.navigate(LogOutPage.routeKey);
}
