import React from 'react';
import {Dimensions, Text, StyleSheet, TouchableHighlight, View} from 'react-native';
import BetterButton from '../components/BetterButton';
import Video from 'react-native-video';
import Logo from '../images/logo.svg';

export default function(props) {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <Video
        source={require('../videos/main.mp4')}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode={'cover'}
        repeat
        style={styles.video}
      />
      <View style={styles.content}>
        <View style={styles.titleContent}>
          <View style={styles.titleTextContent}>
            <Text style={styles.prydeText}>PRYDE</Text>
            <Text style={styles.pioneerText}>Pioneer</Text>
          </View>
          <Logo width={100} height={111}/>
        </View>
        <BetterButton onClick={() => navigate('NewUser')} label={'NEW USER'}/>
        <BetterButton onClick={() => navigate('Begin')} label={'BEGIN'} />
        <TouchableHighlight
          style={styles.submit}>
          <Text style={styles.submitText}>PAST ENTRIES</Text>
        </TouchableHighlight>
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
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 30,
  },
  titleContent: {
    position: 'absolute',
    top: screenHeight / 6,
    width: screenWidth,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleTextContent: {
    justifyContent: 'center',
  },
  prydeText: {
    // fontFamily: 'WorkSans-Regular',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 35,
    letterSpacing: 0.05,
    color: '#FF7F00',
    textAlign: 'center',
    letterSpacing: 5,
  },
  pioneerText: {
    // fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 40,
    lineHeight: 47,
    textAlign: 'center',
    letterSpacing: 1,
    color: '#000000',
  },
  submit: {
    width: 223,
    height: 50,
    backgroundColor: '#FFA143',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  submitText: {
    // fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 3,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
