import React from 'react';
import {Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { Media, Dropdown, Button, BackButton, TextBox } from 'pioneer/components';
import AsyncStorage from '@react-native-community/async-storage';
import {NEW_USER_DIRECTIONS, USER_INFO_STORAGE_KEY} from 'pioneer/constants';

import styles from './newuser-styles.js';
export default function(props) {
  const {navigate} = props.navigation;
  const [id, onChangeId] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [gender, onChangeGender] = React.useState('N/A');
  const [grade, onChangeGrade] = React.useState(0);
  const [race, onChangeRace] = React.useState('N/A');
  const [isHispanic, onChangeHispanic] = React.useState(false);
  const [is4HMember, onChangeIs4HMember] = React.useState(false);

  const submit = async () => {
    const user_info = {
      username: id,
      age: age,
      gender: gender,
      grade: grade,
      race: race,
      isHispanic: isHispanic,
      is4HMember: is4HMember
    };
    const user_info_exists = await AsyncStorage.getItem(USER_INFO_STORAGE_KEY);
    if(user_info_exists){
      await AsyncStorage.mergeItem(USER_INFO_STORAGE_KEY, JSON.stringify(user_info));
    }
    else {
      await AsyncStorage.setItem(USER_INFO_STORAGE_KEY, JSON.stringify(user_info));
    }
    navigate(is4HMember ? 'FourH' : 'Begin', { isControl: id.toLocaleLowerCase().startsWith('c')});
  }

  return (
    <View style={styles.container}>
      <Media filename={require('../../videos/info.mp4')} />
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.content}>
          <View style={styles.header}> 
              <BackButton onClick={() => navigate('Home')} />
              <Text style={styles.text}>{NEW_USER_DIRECTIONS}</Text>
          </View>
          <TextBox
            style={styles.textInput}
            onChangeText={onChangeId}
            value={id}
            placeholder={'ID#'}
            placeholderTextColor={'#ffffff'}
            placeholderStyle={styles.placeholder}
          />
          <TextBox
            keyboardType='numeric'
            style={styles.textInput}
            onChangeText={onChangeAge}
            value={age}
            placeholder={'Age'}
            placeholderTextColor={'#ffffff'}
            placeholderStyle={styles.placeholder}
          />
          <Dropdown
            label={'Gender'}
            items={[
              {label: 'Male', value: 'male'},
              {label: 'Female', value: 'female'},
              {label: 'Other', value: 'other'},
              {label: 'Prefer not to answer', value: 'prefer not to answer'}
            ]}
            onValueChange={onChangeGender}
          />
          <Dropdown
            label={'Grade'}
            items={[
              {label: '6th grade', value: 6},
              {label: '7th grade', value: 7},
              {label: '8th grade', value: 8},
              {label: '9th grade', value: 9},
              {label: '10th grade', value: 10},
              {label: '11th grade', value: 11},
              {label: '12th grade', value: 12},
            ]}
            onValueChange={onChangeGrade}
          />
          <Dropdown
            label={'Race/Ethnicity'}
            items={[
              {label: 'White/European American', value: 'White/European American'},
              {label: 'Black/African American', value: 'Black/African American'},
              {label: 'North American Indian', value: 'North American Indian'},
              {label: 'Asian American', value: 'Asian American'},
              {label: 'Other racial group', value: 'Other racial group'}
            ]}
            onValueChange={onChangeRace}
          />
          <Dropdown
            label={'Hispanic/Latino?'}
            items={[
              {label: 'Yes', value: true},
              {label: 'No', value: false}
            ]}
            onValueChange={onChangeHispanic}
          />
          <Dropdown
            label={'4-H Participant?'}
            items={[
              {label: 'Yes', value: true},
              {label: 'No', value: false}
            ]}
            onValueChange={onChangeIs4HMember}
          />
          <View style={styles.nextButton}>
              <Button
                  onClick={submit}
                  label={is4HMember ? 'NEXT' : 'SUBMIT'}
                  buttonWidth={119}
              />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
