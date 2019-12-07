import React from 'react';
import {Text, StyleSheet, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import BetterTextInput from '../components/BetterTextInput';
import BetterDropdown from '../components/BetterDropdown';
import BetterButton from '../components/BetterButton';
import BackButton from '../components/BackButton';
import AsyncStorage from '@react-native-community/async-storage';
import {NEW_USER_DIRECTIONS, USER_INFO_STORAGE_KEY} from '../constants';
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
      id: id,
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
    navigate(is4HMember ? 'FourH' : 'Begin');
  }

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
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.content}>
          <View style={styles.header}> 
              <BackButton onClick={() => navigate('Home')} />
              <Text style={styles.text}>{NEW_USER_DIRECTIONS}</Text>
          </View>
          <BetterTextInput
            style={styles.textInput}
            onChangeText={onChangeId}
            value={id}
            placeholder={'ID#'}
            placeholderTextColor={'#ffffff'}
            placeholderStyle={styles.placeholder}
          />
          <BetterTextInput
            style={styles.textInput}
            onChangeText={onChangeAge}
            value={age}
            placeholder={'Age'}
            placeholderTextColor={'#ffffff'}
            placeholderStyle={styles.placeholder}
          />
          <BetterDropdown
            label={'Gender'}
            items={[
              {label: 'Male', value: 'male'},
              {label: 'Female', value: 'female'},
              {label: 'Other', value: 'other'},
              {label: 'Prefer not to answer', value: 'prefer not to answer'}
            ]}
            onValueChange={onChangeGender}
          />
          <BetterDropdown
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
          <BetterDropdown
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
          <BetterDropdown
            label={'Hispanic/Latino?'}
            items={[
              {label: 'Yes', value: true},
              {label: 'No', value: false}
            ]}
            onValueChange={onChangeHispanic}
          />
          <BetterDropdown
            label={'4-H Participant?'}
            items={[
              {label: 'Yes', value: true},
              {label: 'No', value: false}
            ]}
            onValueChange={onChangeIs4HMember}
          />
          <View style={styles.nextButton}>
              <BetterButton
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
