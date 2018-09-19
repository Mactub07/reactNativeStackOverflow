import { StyleSheet, Dimensions } from 'react-native';
import { constants } from '../../../constants';

export default StyleSheet.create({
    container: { flex: 1 },
    item: {
        height: constants.HEIGHT_TOOLBAR,
        width: Dimensions.get('window').width - constants.MARGIN_BASIC * 2,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    itemText: {
        textAlign: 'left',
        paddingRight: constants.MARGIN_BASIC
    },
    itemContainer: {
        flexDirection: 'row',
        height: constants.HEIGHT_TOOLBAR,
        width: Dimensions.get('window').width - constants.MARGIN_BASIC * 2,
        paddingHorizontal: constants.MARGIN_BASIC
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
