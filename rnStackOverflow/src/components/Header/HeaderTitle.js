import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * Default navigation bar title component.
 */
export default class HeaderTitle extends React.PureComponent {

    static defaultProps = {
        title: '',
        numberOfLines: 1,
        style: styles.headerTitleText
    };

    static propTypes = {
        title: PropTypes.string,
        numberOfLines: PropTypes.number,
        style: PropTypes.oneOfType([ PropTypes.number, PropTypes.object ])
    };

    render() {
        const { title, style, ...componentProps } = this.props;

        return <Text {...componentProps} style={[ styles.headerTitleText, style ]}>{title}</Text>;
    }
}
