import { StyleSheet } from 'react-native';
import { constants } from '../../constants';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: constants.MARGIN_BASIC
    },
    titleText: {
        color: constants.COLOR_SECONDARY,
        fontSize: constants.FONT_SIZE_PAGE_TITLE,
        fontWeight: constants.FONT_WEIGHT_BOLD,
        marginHorizontal: constants.MARGIN_BASIC,
        textAlign: 'center'
    },
    descriptionText: {
        color: constants.COLOR_SECONDARY,
        fontSize: constants.FONT_SIZE_PAGE_DESCRIPTION,
        fontWeight: constants.FONT_WEIGHT_MEDIUM,
        marginHorizontal: constants.MARGIN_BASIC,
        textAlign: 'center'
    }
});
