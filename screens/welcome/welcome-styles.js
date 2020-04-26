import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 30,
  },
  mainText: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 47,
    letterSpacing: 0.05,
    color: '#FFFFFF',
    padding: 8,
  },
  subText: {
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 25,
    lineHeight: 40,
    color: '#FFFFFF',
    padding: 8,
  },
});
