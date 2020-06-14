import React from 'react';
import * as FileSystem from 'expo-file-system';
import * as MailComposer from 'expo-mail-composer';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { BackButton, Button, Media } from '../../components';
import { USER_RESPONSE_STORAGE_KEY, EMAIL_SUBJECT, EMAIL_BODY } from '../../constants';
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
  
  const exportToCSV = () => {
    MailComposer.composeAsync({
      recipients: [],
      subject: EMAIL_SUBJECT,
      body: EMAIL_BODY,
      attachments: [
        FileSystem.cacheDirectory+'responses.csv'
      ]
    })
  }

  const removeLineBreaks = (words) => {
    return words.toString().replace(/[\r\n]/g, ' ');
  };

  const jsonArrayToCSV = (jsonArray) => {
    var csvString = '';
    if(jsonArray.length >= 1){
      var headers = Object.keys(jsonArray[0]).join('|');
      csvString += headers + '\n';
    }
    for(var i = 0; i < jsonArray.length; i++){
      var keys = Object.keys(jsonArray[i]); 
      var vals = keys.map(k => removeLineBreaks(jsonArray[i][k]));
      var row = vals.join('|');
      csvString += row + '\n';
    }
    return csvString;
  }

  React.useEffect(() => {
    AsyncStorage.getItem(USER_RESPONSE_STORAGE_KEY).then(r => {
      var response_arr = [];
      if(r != null){
        response_arr = JSON.parse(r).responses;
        setResponses(response_arr);
      }
      var fileURI = FileSystem.cacheDirectory+'responses.csv';
      var content = jsonArrayToCSV(response_arr);
      console.log(content);
      FileSystem.writeAsStringAsync(fileURI, content, {
        encoding: 'utf8'
      }).then((_) => {
        console.log("Success");
      }, (err) => {
        console.log(err);
      })
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
