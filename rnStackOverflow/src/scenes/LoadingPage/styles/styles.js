import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center',
        position: 'absolute',
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 2
    },
    bgImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width
    }
});
