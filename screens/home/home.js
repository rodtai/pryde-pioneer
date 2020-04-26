import React from 'react';

// import components
import {Text, View, Image} from 'react-native';
import { Button, Media } from 'pioneer/components';

// import styles
import styles from 'pioneer/screens/home/home-styles.js';

export default function(props) {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <Media filename={require('pioneer/videos/main.mp4')} />
      <View style={styles.content}>
        <View style={styles.titleContent}>
          <View style={styles.titleTextContent}>
            <Text style={styles.prydeText}>PRYDE</Text>
            <Text style={styles.pioneerText}>Pioneer</Text>
          </View>
          <Image style={styles.logo} source={require('pioneer/images/logo.png')} />
        </View>
        <Button onClick={() => navigate('NewUser')} label={'NEW USER'}/>
        <Button onClick={() => navigate('Begin')} label={'BEGIN'} />
        <Button onClick={() => navigate('PastEntries')} label={'PAST ENTRIES'} />
      </View>
    </View>
  );
}
