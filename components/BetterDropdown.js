import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, View} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function BetterDropdown({ label, onClick }) {
  return (
    <TouchableHighlight onPress={onClick}>      
      <View style={styles.dropdownContainer}>
        <Text style={styles.placeholderStyle}>{label}</Text>
        <Icon style={styles.down} name="angle-down" size={30} color="#900" />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    width: 325,
    height: 51,
    backgroundColor: '#4aade9',
    opacity: 0.7,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#FFFAFA',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeholderStyle: {
    color: '#ffffff',
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 1,
    paddingLeft: 30,
  },
  down: {
      color: '#FFFFFF',
      paddingRight: 10,
  }
});
