import React from 'react';
import {Dimensions, Text, StyleSheet, View,  Keyboard, TouchableWithoutFeedback, Animated, UIManager} from 'react-native';
import Video from 'react-native-video';
import {QUESTION_2, CONTROL_QUESTION_2} from '../constants';
import BackButton from '../components/BackButton';
import BetterButton from '../components/BetterButton';
import { TextInput } from 'react-native-gesture-handler';

export default function(props) {
  const {navigate} = props.navigation;
  const isControl = props.navigation.getParam('isControl', false);
  const question = isControl ? CONTROL_QUESTION_2 : QUESTION_2;
  const [answer, setAnswer] = React.useState('');
  const [shift, setShift] = React.useState(new Animated.Value(0));
  const [minTimeElapsed, setMinTimeElapsed] = React.useState(false);
  setTimeout(setMinTimeElapsed, 30 * 1000, true);
  const handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      Animated.timing(
        shift,
        {
          toValue: gap,
          duration: 1000,
          useNativeDriver: true,
        }
      ).start();
    });
  };
  const handleKeyboardDidHide = () => {
    Animated.timing(
      shift,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  };
  React.useEffect(() => {
    // Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    // Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);
  });
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
              <TextInput
                  placeholder={'Enter text here...'}
                  placeholderTextColor={'#ffffff'}
                  onChange={(e) => setAnswer(e.nativeEvent.text)}
                  value={answer}
                  style={styles.responseTextbox}
                  multiline={true}
              />
              <View style={styles.nextButton}>
                <BetterButton disabled={answer.length <= 100 && !minTimeElapsed} buttonWidth={119} label={'NEXT'} onClick={onFinish} />
              </View>
            <View/>
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
