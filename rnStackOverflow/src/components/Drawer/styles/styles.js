import { StyleSheet } from 'react-native';
import { constants } from '../../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: constants.MARGIN_BASIC,
        paddingTop: constants.HEIGHT_TOOLBAR,
        backgroundColor: constants.COLOR_PRIMARY
    }
});
