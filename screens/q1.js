import React from 'react';
import {Dimensions, Text, StyleSheet, ImageBackground, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {QUESTION_1, CONTROL_QUESTION_1} from '../constants';
import BackButton from '../components/BackButton';
import BetterButton from '../components/BetterButton';
import { TextInput } from 'react-native-gesture-handler';
import Video from 'react-native-video';

export default function(props) {
  const {navigate} = props.navigation;
  const [answer, setAnswer] = React.useState('');
  const [minTimeElapsed, setMinTimeElapsed] = React.useState(false);
  const isControl = props.navigation.getParam('isControl', false);
  const onNext = () => {
    navigate('Q2', { 
      question1: question, 
      answer1: answer,
      isControl: isControl 
    });
  }

  const question = isControl ? CONTROL_QUESTION_1 : QUESTION_1;
  setTimeout(setMinTimeElapsed, 30 * 1000, true);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
          <Video 
            source={require('../audio/panel1.wav')}
            style={{ width: 0, height: 0}}
            muted={false}
            repeat={false}
            resizeMode={"cover"}
            volume={1.0}
            rate={1.0}
            ignoreSilentSwitch={"ignore"}
            playWhenInactive={true}
            playInBackground={true}
          />
          <ImageBackground style={styles.backgroundImg} source={require('../images/q1.png')}>
              <View style={styles.content}>
                  <BackButton onClick={() => navigate('Begin')} />
                  <Text style={styles.text}>{question}</Text>
                  <TextInput
                      placeholder={'Enter text here...'}
                      placeholderTextColor={'#ffffff'}
                      onChange={(e) => setAnswer(e.nativeEvent.text)}
                      value={answer}
                      style={styles.responseTextbox}
                      multiline={true}
                  />
                  <View style={styles.nextButton}>
                      <BetterButton disabled={answer.length <= 100 && !minTimeElapsed} buttonWidth={119} label={'NEXT'} onClick={onNext} />
                  </View>
              </View>
          </ImageBackground>
      </View>
    </TouchableWithoutFeedback>  
  );
}
const audio_options = {
  source:{local: require('../audio/panel1.wav')}
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
    fontFamily: 'WorkSans-Regular',
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
  responseTextbox: {
    backgroundColor: '#49AEE9',
    opacity: 0.7,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 10,
    height: screenHeight * 0.65,
    padding: 10,
    color: '#ffffff',
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 0.5,    
  },
});
