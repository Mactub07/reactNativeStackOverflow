import React from 'react';
import { Animated } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import PropTypes from 'prop-types';

export default class Icon extends React.PureComponent {
    static defaultProps = {
        size: 18,
        color: '#000',
        animated: false
    };

    static propTypes = {
        name: PropTypes.string.isRequired,
        size: PropTypes.number,
        color: PropTypes.string,
        lib: PropTypes.oneOf([
            FontAwesomeIcon,
            FoundationIcon,
            EntypoIcon,
            EvilIcon,
            IonIcon,
            MaterialIcon,
            OctIcon,
            ZocialIcon,
            MaterialCommunityIcon,
            SimpleLineIcons
        ]).isRequired,
        style: PropTypes.oneOfType([ PropTypes.object, PropTypes.number, PropTypes.array ]),
        animated: PropTypes.bool
    };

    static IconLibs = {
        FontAwesomeIcon,
        FoundationIcon,
        EntypoIcon,
        EvilIcon,
        IonIcon,
        MaterialIcon,
        OctIcon,
        ZocialIcon,
        MaterialCommunityIcon,
        SimpleLineIcons
    };

    render() {
        const { animated, lib, ...rest } = this.props;

        if (animated) {
            return React.createElement(Animated.createAnimatedComponent(lib), { ...rest });
        }

        return React.createElement(lib, { ...rest });
    }
}
