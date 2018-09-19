import { StyleSheet, Dimensions } from 'react-native';
import { constants } from '../../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: constants.MARGIN_BASIC,
        backgroundColor: constants.COLOR_PRIMARY
    },
    languageContainer: {
        flexDirection: 'row',
        padding: constants.MARGIN_BASIC,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: constants.COLOR_ACCENT,
        height: constants.HEIGHT_TOOLBAR / 1.5,
        justifyContent: 'center',
        width: Dimensions.get('window').width / 2,
        paddingHorizontal: constants.MARGIN_BASIC / 3

    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: { marginHorizontal: constants.MARGIN_BASIC },
    authBlockContainer: {},
    marginTop: { marginTop: constants.MARGIN_BASIC },
    inputTextStyle: { textAlign: 'center' },
    submitButtonStyle: {
        height: constants.HEIGHT_TOOLBAR,
        width: Dimensions.get('window').width / 2,
        backgroundColor: constants.COLOR_ACCENT,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
