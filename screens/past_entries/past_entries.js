import React from 'react';
import { Text, View, Linking, ScrollView, Dimensions } from 'react-native';
import { BackButton, Button, Media } from '../../components';
import { USER_RESPONSE_STORAGE_KEY } from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './past_entries-styles.js';

const screenWidth = Math.round(Dimensions.get('window').width);
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
      const fileContents = 'a,b,c,d\na,b,c,d\n';
      console.log('file is written');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Media
        filename={require('../../videos/info.mp4')}
      />
      <View style={styles.content}>
        <View style={styles.header}> 
            <BackButton onClick={() => navigate('Home')} />
            <Text style={styles.text}>{"Past Entries"}</Text>
        </View>
        <ScrollView>
          {
            responses.map((r, i) => <Button key={i} onClick={pushResponseScreen(r)} label={getDateLabel(r)} buttonWidth={screenWidth*0.8} />)
          }
        </ScrollView>
        <View>
          <Button 
            onClick={exportToCSV}
            label={'Export to CSV'}
            buttonWidth={130}
          />
        </View>
      </View>
    </View>
  );
}
