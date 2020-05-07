import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles, pickerStyles } from 'pioneer/components/Dropdown/dropdown-styles';

export function Dropdown({ label, items, onValueChange }) {
  return (
      <View>
        <RNPickerSelect
            style={pickerStyles}
            onValueChange={onValueChange}
            placeholder={{ label: label, value: ''}}
            items={items}
            Icon={() => {
              return <Icon style={styles.down} name={"angle-down"} size={30} color={"#900"} />;
            }}
        />
      </View>
  );
}
