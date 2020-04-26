import React from 'react';

// import components
import { TouchableOpacity, Text } from 'react-native';

// import styles
import { getStyles } from 'pioneer/components/Button/button-styles';

export function Button({disabled, onClick, label, buttonWidth, color, borderColor }) {
  const styles = getStyles(buttonWidth, disabled, color, borderColor);
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.submit}
      onPress={onClick}
      >
      <Text style={styles.submitText}>{label}</Text>
    </TouchableOpacity>
  );
}
