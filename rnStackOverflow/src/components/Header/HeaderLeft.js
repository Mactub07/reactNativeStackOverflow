import React from 'react';
import { TouchableOpacity } from 'react-native';
import { noop } from './../../utils/noop';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * Navigation bar left button component.
 */
export default class HeaderLeft extends React.PureComponent {

    static defaultProps = {
        style: styles.headerLeft,
        onPress: noop
    };

    static propTypes = {
        style: PropTypes.oneOfType([ PropTypes.number, PropTypes.object ]),
        onPress: PropTypes.func
    };

    render() {
        const { children, style, ...buttonProps } = this.props;

        return <TouchableOpacity style={[ styles.headerLeft, style ]} {...buttonProps}>{children}</TouchableOpacity>;
    }
}
