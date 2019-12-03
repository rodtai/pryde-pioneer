import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
export default function BetterButton({onClick, label, buttonWidth}) {
  const customStyles = styles(buttonWidth)
  return (
    <TouchableHighlight
      style={customStyles.submit}
      onPress={onClick}>
      <Text style={customStyles.submitText}>{label}</Text>
    </TouchableHighlight>
  );
}

const styles = (buttonWidth) => StyleSheet.create({
  submit: {
    width: buttonWidth ? buttonWidth : 223,
    height: 50,
    backgroundColor: '#FFA143',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
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
