import React from 'react';
import { View, Switch, AsyncStorage } from 'react-native';
import { Description } from '../../../components/TextComponents';
import styles from '../styles/styles';

export default class ChangeLocalizationBlock extends React.PureComponent {
    render(){
        return (
            <View style={styles.languageContainer}>
                <Description text={this.props.texts.changeLocalization} />
                <Switch
                    value={this.props.language === 'en' ? false : true}
                    onValueChange={this.onValueChange}
                />
            </View>
        );
    }

    onValueChange = async (value) => {
        const ln = value ? 'ru' : 'en';
        this.props.setLanguage(ln);

        try {
            await AsyncStorage.setItem('ln', ln);
        } catch (error) {
            __DEV__ && console.warn(error);
        }
    }
}
