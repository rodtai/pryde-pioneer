import { StyleSheet } from 'react-native';

export const getStyles = (buttonWidth, disabled, color, borderColor) => StyleSheet.create({
    submit: {
      width: buttonWidth ? buttonWidth : 223,
      height: 50,
      backgroundColor: color ? color : '#FFA143',
      borderRadius: 10,
      borderColor: borderColor ? borderColor : '#FFA143',
      borderWidth: 2,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 20,
      opacity: disabled ? 0.5 : 1,
    },
    submitText: {
      fontFamily: 'WorkSans-Regular',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 20,
      lineHeight: 23,
      letterSpacing: 3,
      color: '#FFFFFF',
      textAlign: 'center',
    },
  });
  