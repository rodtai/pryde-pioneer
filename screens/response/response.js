import React from 'react';
import { Text, View, ScrollView, Share} from 'react-native';
import { BackButton, Button } from '../../components';

import styles from './response-styles';

export default function(props) {
  const {navigate} = props.navigation;
  const question1 = props.route.params?.question1 ?? '';
  const answer1 = props.route.params?.answer1 ?? '';
  const question2 = props.route.params?.question2 ?? '';
  const answer2 = props.route.params?.answer2 ?? '';
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
              <Button
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
