import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, StyleSheet} from 'react-native';
export default function({onClick, color}){
    return (
        <TouchableOpacity
            onPress={onClick}
        >
            <Icon style={styles.left} name="angle-left" size={50} color={color ? color : "#FFA143"} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    left: {
        marginRight: 20,
    }
});