import React from 'react';
import { BackButton } from '../BackButton';
import { View } from 'react-native';
import { styles } from './header-styles';

export function Header() {
    return (
        <View style={styles.header}> 
            <BackButton onClick={() => navigate('Home')} />
        </View>
    );
}