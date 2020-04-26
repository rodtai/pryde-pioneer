import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {BEGIN_SCREEN_DIRECTIONS} from 'pioneer/constants';
import { BackButton, Button } from 'pioneer/components';

import styles from './begin-styles.js';
export default function(props) {
  const {navigate} = props.navigation;
  console.log(props.route)
  const isControl = props.route.params?.isControl ?? false;
  const onNext = () => {
    navigate('Q1', { isControl: isControl });
  }
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.backgroundImg} source={require('pioneer/images/begin.png')}>
            <View style={styles.content}>
                <BackButton onClick={() => navigate('Home')} />
                <Text style={styles.text}>{BEGIN_SCREEN_DIRECTIONS}</Text>
                <View style={styles.nextButton}>
                    <Button buttonWidth={119} label={'BEGIN'} onClick={onNext} />
                </View>
            </View>
        </ImageBackground>
    </View>
  );
}