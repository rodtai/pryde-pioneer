import React from 'react';
import {Text, View} from 'react-native';
import styles from './welcome-styles';
import BetterButton from '../../components/BetterButton';
import {WELCOME_TITLE, WELCOME_BLURB} from '../../constants';
import Video from '../../components/video/video';
export default function(props) {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <Video filename={require('../../videos/welcome.mp4')} />
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
