import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from '../Icon/Icon';

/**
 * Navigation bar back image.
 */
export default class HeaderBackImage extends React.PureComponent {

    static defaultProps = {
        lib: 'IonIcon',
        name: 'md-arrow-back',
        size: 30,
        color: '#fff',
        containerStyle: styles.iconContainerStyle
    };

    static propTypes = {
        lib: PropTypes.string,
        name: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,
        containerStyle: PropTypes.oneOfType([ PropTypes.object, PropTypes.number ])
    };

    render() {
        return (
            <View style={this.props.containerStyle}>
                <Icon
                    lib={Icon.IconLibs[this.props.lib]}
                    name={this.props.name}
                    size={this.props.size}
                    color={this.props.color}
                />
            </View>
        );
    }
}
