import React from 'react';
import { Text, View } from 'react-native';
import { END_BLURB, USER_INFO_STORAGE_KEY } from 'pioneer/constants';
import { BackButton, Button, Media } from 'pioneer/components';
import { USER_RESPONSE_STORAGE_KEY } from 'pioneer/constants';
import AsyncStorage from '@react-native-community/async-storage';
import { sendResponse } from 'pioneer/networking';

import styles from 'pioneer/screens/end/end-styles.js';

export default function(props) {
  const {navigate} = props.navigation;
  const onFinish = async () => {
    var response = {
      question_1: props.route.params?.question1 ?? '',
      answer_1: props.route.params?.answer1 ?? '',
      question_2: props.route.params?.question2 ?? '',
      answer_2: props.route.params?.answer2 ?? '',
      timestamp: Date.now(),
    };
    const response_info_exists = await AsyncStorage.getItem(USER_RESPONSE_STORAGE_KEY);
    const user_info_exists = await AsyncStorage.getItem(USER_INFO_STORAGE_KEY);
    const user = user_info_exists ? JSON.parse(user_info_exists) : {};
    var sent = sendResponse(user, response);
    response = { ...response, sent: sent };
    if(response_info_exists != null){
      var prev_responses_arr = JSON.parse(response_info_exists).responses;
      prev_responses_arr.push(response);
      await AsyncStorage.setItem(USER_RESPONSE_STORAGE_KEY, JSON.stringify({ responses: prev_responses_arr}));
    }
    else {
      var new_responses_arr = [response];
      await AsyncStorage.setItem(USER_RESPONSE_STORAGE_KEY, JSON.stringify({ responses: new_responses_arr}));
    }
    navigate('Home');
  };
  return (
    <View style={styles.container}>
        <Media filename={require('pioneer/videos/end.mp4')} />
        <View style={styles.content1} >
            <BackButton onClick={() => navigate('Q2')} />
            <Text style={styles.text}>{END_BLURB}</Text>
        </View>
        <View style={styles.content2}>
            <View style={styles.nextButton}>
              <Button buttonWidth={119} label={'HOME'} onClick={onFinish} />
            </View>
        </View>
    </View>
  );
}
