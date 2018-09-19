import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * Default Title component.
 */
export default class Title extends React.PureComponent {

    static defaultProps = {
        text: '',
        numberOfLines: 1
    };

    static propTypes = {
        text: PropTypes.string,
        numberOfLines: PropTypes.number,
        style: PropTypes.oneOfType([ PropTypes.number, PropTypes.object ]),
        containerStyle: PropTypes.oneOfType([ PropTypes.number, PropTypes.object ])
    };

    render() {
        const { containerStyle, text, style, ...componentProps } = this.props;

        return (
            <View style={[ styles.container, containerStyle ]}>
                <Text {...componentProps} style={[ styles.titleText, style ]}>{text}</Text>
            </View>)
            ;
    }
}
