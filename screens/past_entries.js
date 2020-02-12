import React from 'react';
import {Dimensions, Text, StyleSheet, View, Linking} from 'react-native';
import Video from 'react-native-video';
import BackButton from '../components/BackButton';
import {USER_RESPONSE_STORAGE_KEY} from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import BetterButton from '../components/BetterButton';
export default function(props) {
  const {navigate} = props.navigation;
  const [responses, setResponses] = React.useState([]);
  const pushResponseScreen = (response) => () => {
    navigate('Response', {
      question1: response.question_1,
      answer1: response.answer_1,
      question2: response.question_2,
      answer2: response.answer_2,
    });
  }
  const getDateLabel = (response) => {
    var d = response.timestamp;
    if(d != null){
      return new Date(d).toString().substring(0, 24);
    }
    else{
      return '';
    }
  }
  const exportToCSV = () => Linking.openURL('mailto:?subject=My Pioneer Archive&body=Your past entries in the Pioneer App are attached to this email.');
  React.useEffect(() => {
    AsyncStorage.getItem(USER_RESPONSE_STORAGE_KEY).then(r => {
      if(r != null){
        var response_arr = JSON.parse(r).responses;
        setResponses(response_arr);
      }
    });
  }, []);

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
            <Text style={styles.text}>{"Past Entries"}</Text>
        </View>
        <View>
          {
            responses.map((r, i) => <BetterButton key={i} onClick={pushResponseScreen(r)} label={getDateLabel(r)} buttonWidth={screenWidth*0.8} />)
          }
        </View>
        <View>
          <BetterButton 
            onClick={exportToCSV}
            label={'Export to CSV'}
            buttonWidth={130}
          />
        </View>
      </View>
    </View>
  );
}
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
