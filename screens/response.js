import React from 'react';
import {Dimensions, Text, StyleSheet, ImageBackground, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {QUESTION_1} from '../constants';
import BackButton from '../components/BackButton';
import BetterButton from '../components/BetterButton';
import { TextInput } from 'react-native-gesture-handler';

export default function(props) {
  const question1 = props.navigation.getParam('question1', '');
  const answer1 = props.navigation.getParam('answer1', '');
  const question2 = props.navigation.getParam('question2', '');
  const answer2 = props.navigation.getParam('answer2', '');
  return (
      <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Response</Text>
                <Text style={styles.regularText}>{question1}</Text>
                <Text style={styles.regularText}>{answer1}</Text>
                <Text style={styles.regularText}>{question2}</Text>
                <Text style={styles.regularText}>{answer2}</Text>
            </View>
      </View>
  );
}
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
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
  regularText: {
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
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
