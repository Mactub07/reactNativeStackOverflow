import React from 'react';
import { View } from 'react-native';
import Icon from '../Icon/Icon';
import styles from './styles';
import { constants } from '../../constants';

export default class DefaultBackImage extends React.PureComponent {
    render() {
        return (
            <View style={styles.headerLeftBackButton}>
                <Icon
                    name={'md-arrow-back'}
                    lib={Icon.IconLibs.IonIcon}
                    size={26}
                    color={constants.COLOR_PRIMARY}
                />
            </View>
        );
    }
}
