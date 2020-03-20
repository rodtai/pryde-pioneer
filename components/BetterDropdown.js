import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, View} from 'react-native';

export default function BetterDropdown({ label, items, onValueChange }) {
  return (
      <View>
        <RNPickerSelect
            style={{
              ...pickerStyles,
              iconContainer: {
                top: 10,
                right: 12,
              },
              useNativeAndroidPickerStyle: false,
              placeholder: {
                color: '#ffffff',
                fontFamily: 'WorkSans-Regular',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 20,
                lineHeight: 23,
                letterSpacing: 1,
                paddingLeft: 30,
              },
            }}
            onValueChange={onValueChange}
            placeholder={{ label: label, value: ''}}
            items={items}
            Icon={() => {
              return <Icon style={styles.down} name="angle-down" size={30} color="#900" />;
            }}
        />
      </View>
  );
}


const pickerStyles = StyleSheet.create({
  inputIOS: {
    width: 325,
    height: 51,

    color: '#000000',
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

    color: '#000000',
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
const styles = StyleSheet.create({
  down: {
      color: '#FFFFFF',
      paddingRight: 10,
  }
});
