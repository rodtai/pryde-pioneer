import React from 'react';
import {Dimensions, Text, StyleSheet, ImageBackground, View} from 'react-native';
import {QUESTION_1} from '../constants';
import BackButton from '../components/BackButton';
import BetterButton from '../components/BetterButton';
import { TextInput } from 'react-native-gesture-handler';

export default function(props) {
  const {navigate} = props.navigation;
  const [answer1, setAnswer1] = React.useState('');
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.backgroundImg} source={require('../images/q1.png')}>
            <View style={styles.content}>
                <BackButton onClick={() => navigate('Begin')} />
                <Text style={styles.text}>{QUESTION_1}</Text>
                <TextInput
                    placeholder={'Enter text here...'}
                    placeholderTextColor={'#ffffff'}
                    onChange={(e) => setAnswer1(e.nativeEvent.text)}
                    value={answer1}
                    style={styles.responseTextbox}
                    multiline={true}
                />
                <View style={styles.nextButton}>
                    <BetterButton buttonWidth={119} label={'NEXT'} onClick={() => navigate('Q2')} />
                </View>
            </View>
        </ImageBackground>
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
