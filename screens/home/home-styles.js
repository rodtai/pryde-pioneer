import {StyleSheet, Dimensions} from 'react-native';
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
export default StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 30,
  },
  titleContent: {
    position: 'absolute',
    top: screenHeight / 6,
    width: screenWidth,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleTextContent: {
    justifyContent: 'center',
  },
  prydeText: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 35,
    letterSpacing: 0.05,
    color: '#FF7F00',
    textAlign: 'center',
    letterSpacing: 5,
  },
  pioneerText: {
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 40,
    lineHeight: 47,
    textAlign: 'center',
    letterSpacing: 1,
    color: '#000000',
  },
});
