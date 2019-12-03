import React from 'react';
import {Dimensions, Text, StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Video from 'react-native-video';
import {QUESTION_2} from '../constants';
import BackButton from '../components/BackButton';
import BetterButton from '../components/BetterButton';
import { TextInput } from 'react-native-gesture-handler';

export default function(props) {
  const {navigate} = props.navigation;
  const [answer2, setAnswer2] = React.useState('');
  return (
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
            <Text style={styles.text}>{QUESTION_2}</Text>
            <KeyboardAwareScrollView
              resetScrollToCoords={{ x: 0, y: 0 }}
              scrollEnabled={false}
            >
              <TextInput
                  placeholder={'Enter text here...'}
                  placeholderTextColor={'#ffffff'}
                  onChange={(e) => setAnswer2(e.nativeEvent.text)}
                  value={answer2}
                  style={styles.responseTextbox}
                  multiline={true}
              />
              <View style={ {height: 120}} />
            </KeyboardAwareScrollView>
            <View style={styles.nextButton}>
                <BetterButton buttonWidth={119} label={'NEXT'} onClick={() => navigate('End')} />
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
