import React from 'react';

// import components
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

// import styles
import { styles } from 'pioneer/components/BackButton/backbutton-styles'

export function BackButton({onClick, color}){
    return (
        <TouchableOpacity onPress={onClick}>
            <Icon 
                style={styles.left} 
                name={"angle-left"}
                size={50} 
                olor={color ? color : "#FFA143"} 
            />
        </TouchableOpacity>
    );
}
