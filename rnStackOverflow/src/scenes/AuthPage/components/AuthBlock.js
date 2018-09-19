import React from 'react';
import { View, TextInput, Text, TouchableHighlight, Alert, AsyncStorage } from 'react-native';
import styles from '../styles/styles';
import { constants } from '../../../constants';
import Icon from '../../../components/Icon/Icon';

export default class AuthBlock extends React.Component {
    state = { userName: '', password: '' };

    render() {
        return (
            <View style={styles.authBlockContainer}>
                <View style={styles.inputRow}>
                    <View style={styles.iconStyle}>
                        <Icon
                            name={'md-contact'}
                            color={constants.COLOR_ACCENT}
                            lib={Icon.IconLibs.IonIcon}
                            size={30}
                        />
                    </View>
                    <View style={styles.inputStyle}>
                        <TextInput
                            onChangeText={userName => this.setState({ userName })}
                            placeholder={this.props.texts.inputUserNamePlaceHolder}
                            placeholderTextColor={constants.COLOR_ACCENT}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            spellCheck={false}
                            style={styles.inputTextStyle}
                        />
                    </View>
                    <View style={styles.iconStyle}>
                        <Icon {...this.getValidationIconProps(this.state.userName)} size={30} />
                    </View>
                </View>
                <View style={[ styles.inputRow, styles.marginTop ]}>
                    <View style={styles.iconStyle}>
                        <Icon
                            name={'md-lock'}
                            color={constants.COLOR_ACCENT}
                            lib={Icon.IconLibs.IonIcon}
                            size={37}
                        />
                    </View>
                    <View style={styles.inputStyle}>
                        <TextInput
                            onChangeText={password => this.setState({ password })}
                            placeholder={this.props.texts.inputUserNamePlaceHolder}
                            placeholderTextColor={constants.COLOR_ACCENT}
                            secureTextEntry
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            spellCheck={false}
                            style={styles.inputTextStyle}
                        />
                    </View>
                    <View style={styles.iconStyle}>
                        <Icon {...this.getValidationIconProps(this.state.password)} size={30} />
                    </View>
                </View>
                <View style={[ styles.inputRow, styles.marginTop ]}>
                    <TouchableHighlight onPress={this.submitData} style={styles.submitButtonStyle}>
                        <Text>{this.props.texts.AuthSubmitButtonText}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    getValidationIconProps = param => ({
        name: param.length ? 'md-checkmark-circle' : 'md-alert',
        color: param.length ? constants.COLOR_OK : constants.COLOR_ALERT,
        lib: Icon.IconLibs.IonIcon
    });

    submitData = () => {
        const { userName, password } = this.state;

        if (!userName.length || !password.length) {
            Alert.alert(
                this.props.texts.AttentionAuthTitle,
                this.props.texts.AttentionAuthText,
                [
                    { text: 'OK' }
                ],
                { cancelable: false }
            );

            return false;
        }
        this.props.navigateToMainPage();
        this.props.setAuthData(userName, password);
        AsyncStorage.setItem('auth', `${userName}/${password}`);
    }
}
