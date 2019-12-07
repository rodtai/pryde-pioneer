import React from 'react';
import {Dimensions, Text, StyleSheet, View,  Keyboard, TouchableWithoutFeedback} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Video from 'react-native-video';
import {QUESTION_2} from '../constants';
import BackButton from '../components/BackButton';
import BetterButton from '../components/BetterButton';
import { TextInput } from 'react-native-gesture-handler';

export default function(props) {
  const {navigate} = props.navigation;
  const question = QUESTION_2;
  const [answer, setAnswer] = React.useState('');
  const onFinish = () => {
    var q1 = props.navigation.getParam('question1', '');
    var a1 = props.navigation.getParam('answer1', '');
    navigate('End', { 
      question1: q1, 
      answer1: a1, 
      question2: question, 
      answer2: answer 
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
          <Video
              source={require('../videos/q2.mp4')}
              rate={1.0}
              volume={1.0}
              muted={false}
              resizeMode={'cover'}
              repeat
              style={styles.video}
          />
          <View style={styles.content}>
              <BackButton onClick={() => navigate('Q1')} />
              <Text style={styles.text}>{question}</Text>
              <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={false}
              >
                <TextInput
                    placeholder={'Enter text here...'}
                    placeholderTextColor={'#ffffff'}
                    onChange={(e) => setAnswer(e.nativeEvent.text)}
                    value={answer}
                    style={styles.responseTextbox}
                    multiline={true}
                />
                <View style={ {height: 120}} />
              </KeyboardAwareScrollView>
              <View style={styles.nextButton}>
                  <BetterButton buttonWidth={119} label={'NEXT'} onClick={onFinish} />
              </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
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
    justifyContent: 'space-between',
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
    height: screenHeight * 0.46,
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
