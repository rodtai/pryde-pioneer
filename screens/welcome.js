import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import BetterButton from '../components/BetterButton';
import Video from 'react-native-video';
import {WELCOME_TITLE, WELCOME_BLURB} from '../constants';
export default function(props) {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <Video
        source={require('../videos/welcome.mp4')}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode={'cover'}
        repeat
        style={styles.video}
      />
      <View style={styles.content}>
        <Text style={styles.mainText}>{WELCOME_TITLE}</Text>
        <Text style={styles.subText}>{WELCOME_BLURB}</Text>
        <BetterButton
          onClick={() => navigate('Home')}
          label={'GET STARTED'}
        />
      </View>
    </View>
  );
}

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
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 30,
  },
  mainText: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 47,
    letterSpacing: 0.05,
    color: '#FFFFFF',
    padding: 8,
  },
  subText: {
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 25,
    lineHeight: 40,
    color: '#FFFFFF',
    padding: 8,
  },
});
