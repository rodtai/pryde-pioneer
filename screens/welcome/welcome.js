import React from 'react';

// import components
import { Text, View } from 'react-native';
import { Button, Media } from 'pioneer/components';

// import constants
import {WELCOME_TITLE, WELCOME_BLURB} from 'pioneer/constants';

// import styles
import styles from 'pioneer/screens/welcome/welcome-styles';

export default function(props) {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <Media filename={require('pioneer/videos/welcome.mp4')} />
      <View style={styles.content}>
        <Text style={styles.mainText}>{WELCOME_TITLE}</Text>
        <Text style={styles.subText}>{WELCOME_BLURB}</Text>
        <Button
          onClick={() => navigate('Home')}
          label={'GET STARTED'}
        />
      </View>
    </View>
  );
}
