import React from 'react';
import {Dimensions, Text, StyleSheet, ImageBackground, View} from 'react-native';
import {BEGIN_SCREEN_DIRECTIONS} from '../constants';
import BackButton from '../components/BackButton';
import BetterButton from '../components/BetterButton';

export default function(props) {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.backgroundImg} source={require('../images/begin.png')}>
            <View style={styles.content}>
                <BackButton onClick={() => navigate('Home')} />
                <Text style={styles.text}>{BEGIN_SCREEN_DIRECTIONS}</Text>
                <View style={styles.nextButton}>
                    <BetterButton buttonWidth={119} label={'BEGIN'} onClick={() => navigate('Q1')} />
                </View>
            </View>
        </ImageBackground>
    </View>
  );
}
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    margin: 30,
  },
  text: {
    // fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 25,
    lineHeight: 40,
    color: '#ffffff',
  },
  backgroundImg: {
      flex: 1,
      resizeMode: 'cover',
  },
  nextButton: {
    alignSelf: 'flex-end',
  },
});
