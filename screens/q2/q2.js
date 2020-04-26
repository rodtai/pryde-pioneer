import React from 'react';
import { Text, View,  Keyboard, TouchableWithoutFeedback } from 'react-native';
import {QUESTION_2, CONTROL_QUESTION_2} from '../../constants';
import { BackButton, Button, TextBox, Media } from 'pioneer/components';

import styles from './q2-styles';

export default function(props) {
  const {navigate} = props.navigation;
  const isControl = props.route.params?.isControl ?? false;
  const question = isControl ? CONTROL_QUESTION_2 : QUESTION_2;
  const [answer, setAnswer] = React.useState('');
  const [minTimeElapsed, setMinTimeElapsed] = React.useState(false);
  setTimeout(setMinTimeElapsed, 30 * 1000, true);
  
  const onFinish = () => {
    var q1 = props.route.params?.question1 ?? '';
    var a1 = props.route.params?.answer1 ?? '';
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
          <Media filename={require('../../audio/panel1.wav')}/>
          <Media filename={require('../../videos/q2.mp4')}/>
            <View style={styles.content}>
              <View style={styles.repsonseview}>
                <BackButton onClick={() => navigate('Q1')} />
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
                <Button disabled={answer.length <= 100 && !minTimeElapsed} buttonWidth={119} label={'NEXT'} onClick={onFinish} />
              </View>
            <View/>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

