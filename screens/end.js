import React from 'react';
import {Dimensions, Text, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import {END_BLURB, USER_INFO_STORAGE_KEY} from '../constants';
import BackButton from '../components/BackButton';
import BetterButton from '../components/BetterButton';
import {USER_RESPONSE_STORAGE_KEY} from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import { sendResponse } from '../networking';

export default function(props) {
  const {navigate} = props.navigation;
  const onFinish = async () => {
    var response = {
      question_1: props.navigation.getParam('question1', ''),
      answer_1: props.navigation.getParam('answer1', ''),
      question_2: props.navigation.getParam('question2', ''),
      answer_2: props.navigation.getParam('answer2', ''),
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
        <Video
            source={require('../videos/end.mp4')}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode={'cover'}
            repeat
            style={styles.video}
        />
        <View style={styles.content1} >
            <BackButton onClick={() => navigate('Q2')} />
            <Text style={styles.text}>{END_BLURB}</Text>
        </View>
        <View style={styles.content2}>
            <View style={styles.nextButton}>
              <BetterButton buttonWidth={119} label={'HOME'} onClick={onFinish} />
            </View>
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
  content1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    margin: 30,
  },
  content2: {
    flex: 1,
    justifyContent: 'flex-end',
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
});
