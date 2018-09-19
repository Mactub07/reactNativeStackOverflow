import { StyleSheet, Dimensions } from 'react-native';
import { constants } from '../../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: constants.MARGIN_BASIC,
        backgroundColor: constants.COLOR_PRIMARY
    },
    submitButtonStyle: {
        height: constants.HEIGHT_TOOLBAR,
        width: Dimensions.get('window').width / 2,
        backgroundColor: constants.COLOR_ACCENT,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
