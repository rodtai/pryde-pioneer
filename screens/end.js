import React from 'react';
import {Dimensions, Text, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import {END_BLURB} from '../constants';
import BackButton from '../components/BackButton';
import BetterButton from '../components/BetterButton';

export default function(props) {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
        <Video
            source={require('../videos/end.mp4')}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode={'cover'}
            repeat
            style={styles.video}
        />
        <View style={styles.content} >
            <BackButton onClick={() => navigate('Q2')} />
            <Text style={styles.text}>{END_BLURB}</Text>
            <View style={styles.nextButton}>
                <BetterButton buttonWidth={119} label={'HOME'} onClick={() => navigate('Home')} />
            </View>
        </View>
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
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    margin: 30,
  },
  text: {
    // fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
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
