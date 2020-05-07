import { StyleSheet } from 'react-native';
export const pickerStyles = StyleSheet.create({
    inputIOS: {
        width: 325,
        height: 51,

        color: '#FFFFFF',
        fontFamily: 'WorkSans-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 23,
        letterSpacing: 1,
        paddingLeft: 30,

        backgroundColor: '#4aade9',
        opacity: 0.7,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#FFFAFA',
        borderRadius: 10,
    },
    inputAndroid: {
        width: 325,
        height: 51,

        color: '#FFFFFF',
        fontFamily: 'WorkSans-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 23,
        letterSpacing: 1,
        paddingLeft: 30,

        backgroundColor: '#4aade9',
        opacity: 0.7,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#FFFAFA',
        borderRadius: 10,
    },
});

export const styles = StyleSheet.create({
    down: {
        color: '#FFFFFF',
        paddingTop: 10,
        paddingRight: 10,
    },
    iconContainer: {
        top: 10,
        right: 12,
    },
    useNativeAndroidPickerStyle: false,
    placeholder: {
        color: '#FFFFFF',
        fontFamily: 'WorkSans-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 23,
        letterSpacing: 1,
        paddingLeft: 30,
    },
});
  