import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import BetterTextInput from '../components/BetterTextInput';
import BetterDropdown from '../components/BetterDropdown';
import BetterButton from '../components/BetterButton';
import BackButton from '../components/BackButton';
import {FOURH_Q1, FOURH_Q2} from '../constants';
export default function(props) {
  const {navigate} = props.navigation;
  const [id, onChangeId] = React.useState('');
  const [age, onChangeAge] = React.useState('');

  return (
    <View style={styles.container}>
      <Video
        source={require('../videos/info.mp4')}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode={'cover'}
        repeat
        style={styles.video}
      />
      <View style={styles.content}>
        <View style={styles.header}> 
            <BackButton onClick={() => navigate('Home')} />
            <Text style={styles.text}>{FOURH_Q1}</Text>
        </View>
        <BetterTextInput
          style={styles.textInput}
          onChangeText={onChangeId}
          value={id}
          placeholder={'Enter text here...'}
          placeholderTextColor={'#ffffff'}
          placeholderStyle={styles.placeholder}
        />
        <Text style={styles.text}>{FOURH_Q2}</Text>
        <BetterTextInput
          style={styles.textInput}
          onChangeText={onChangeAge}
          value={age}
          placeholder={'Enter text here...'}
          placeholderTextColor={'#ffffff'}
          placeholderStyle={styles.placeholder}
        />
      </View>
    </View>
  );
}

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
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 30,
  },
  text: {
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.5,
    color: '#ffffff',
  },
  textInput: {
    width: 325,
    height: 51,
    backgroundColor: '#4aade9',
    opacity: 0.7,
    color: '#000000',
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 1,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#FFFAFA',
    borderRadius: 10,
    paddingLeft: 30,
  },
  placeholder: {
    paddingLeft: 30,
    borderColor: '#ffffff',
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 1,
  },
  header: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nextButton: {
    alignSelf: 'flex-end',
  },
});
