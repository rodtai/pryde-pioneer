import React from 'react';
import { Text, ImageBackground, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {QUESTION_1, CONTROL_QUESTION_1} from '../../constants';
import { BackButton, Button, TextBox, Media } from 'pioneer/components';

import styles from './q1-styles';

export default function(props) {
  const {navigate} = props.navigation;
  const [answer, setAnswer] = React.useState('');
  const [minTimeElapsed, setMinTimeElapsed] = React.useState(false);
  const isControl = props.route.params?.isControl ?? false;
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
          <Media filename={require('../../audio/panel1.wav')} />
          <ImageBackground style={styles.backgroundImg} source={require('../../images/q1.png')}>
              <View style={styles.content}>
                  <View style={styles.responseview}>
                    <BackButton onClick={() => navigate('Begin')} />
                    <Text style={styles.text}>{question}</Text>
                    <TextBox
                        placeholder={'Enter text here...'}
                        placeholderTextColor={'#ffffff'}
                        onChange={(e) => setAnswer(e.nativeEvent.text)}
                        value={answer}
                        style={styles.responseTextbox}
                        multiline={true}
                    />
                  </View>
                  <View style={styles.nextButton}>
                      <Button disabled={answer.length <= 100 && !minTimeElapsed} buttonWidth={119} label={'NEXT'} onClick={onNext} />
                  </View>
              </View>
          </ImageBackground>
      </View>
    </TouchableWithoutFeedback>  
  );
}
const audio_options = {
  source:{local: require('../../audio/panel1.wav')}
}
