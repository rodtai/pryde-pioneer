import React from 'react';
import { Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { TextBox, BackButton, Media, Button } from 'pioneer/components';
import {FOURH_Q1, FOURH_Q2, USER_INFO_STORAGE_KEY} from 'pioneer/constants';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './4h-styles.js';

export default function(props) {
  const {navigate} = props.navigation;
  const [country, onChangeCountry] = React.useState('');
  const [programType, onChangeProgramType] = React.useState('');
  const submit = async () => {
    const user_info = {
      country: country,
      programType: programType
    };
    const user_info_exists = await AsyncStorage.getItem(USER_INFO_STORAGE_KEY);
    if(user_info_exists){
      await AsyncStorage.mergeItem(USER_INFO_STORAGE_KEY, JSON.stringify(user_info));
    }
    else {
      await AsyncStorage.setItem(USER_INFO_STORAGE_KEY, JSON.stringify(user_info));
    }
    navigate('Begin', { isControl: props.route.params?.isControl ?? false });
  }
  return (
    <View style={styles.container}>
      <Media filename={require('pioneer/videos/info.mp4')} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.content}>
            <View style={styles.header}> 
                <BackButton onClick={() => navigate('Home')} />
            </View>
            <Text style={styles.text}>{FOURH_Q1}</Text>
            <TextBox
              style={styles.textInput}
              onChangeText={onChangeCountry}
              value={country}
              placeholder={'Enter text here...'}
              placeholderTextColor={'#ffffff'}
              placeholderStyle={styles.placeholder}
            />
            <Text style={styles.text}>{FOURH_Q2}</Text>
            <TextBox
              style={styles.textInput}
              onChangeText={onChangeProgramType}
              value={programType}
              placeholder={'Enter text here...'}
              placeholderTextColor={'#ffffff'}
              placeholderStyle={styles.placeholder}
            />
            <View style={styles.nextButton}>
                  <Button
                      onClick={submit}
                      label={'SUBMIT'}
                      buttonWidth={119}
                  />
            </View>
          </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
