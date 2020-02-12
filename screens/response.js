import React from 'react';
import {Dimensions, Text, StyleSheet, ImageBackground, View, Keyboard, TouchableWithoutFeedback, ScrollView, Share} from 'react-native';
import {QUESTION_1} from '../constants';
import BackButton from '../components/BackButton';
import BetterButton from '../components/BetterButton';
import { TextInput } from 'react-native-gesture-handler';

export default function(props) {
  const {navigate} = props.navigation;
  const question1 = props.navigation.getParam('question1', '');
  const answer1 = props.navigation.getParam('answer1', '');
  const question2 = props.navigation.getParam('question2', '');
  const answer2 = props.navigation.getParam('answer2', '');
  const link = 'https://pryde.bctr.cornell.edu/'
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'My Response',
        message: `${question1}\n\n${answer1}\n\n${question2}\n\n${answer2}\n\n`,
        url: link,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
      <View style={styles.container}>
            <View style={styles.header}> 
              <BackButton onClick={() => navigate('PastEntries')} color={'#ffffff'} />
              <Text style={styles.text}>Response</Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.boldText}>{question1}</Text>
                <Text style={styles.regularText}>{answer1}</Text>
                <Text style={styles.boldText}>{question2}</Text>
                <Text style={styles.regularText}>{answer2}</Text>
            </ScrollView>
            <View style={styles.buttonView}>
              <BetterButton
                  onClick={onShare}
                  label={'SHARE'}
                  buttonWidth={100}
                  color={'orange'}
                  borderColor={'white'}
              />
            </View>
      </View>
  );
}
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 40,
    marginHorizontal: 30,
  },
  buttonView: {
    marginBottom: 20
  },
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
    justifyContent: 'flex-start',
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
    fontSize: 18,
    lineHeight: 40,
    color: '#ffffff',
  },
  boldText: {
    fontFamily: 'WorkSans-Bold',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 40,
    color: '#ffffff'
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
