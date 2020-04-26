import {StyleSheet, Dimensions} from 'react-native';
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
export default StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 40,
    marginHorizontal: 30,
  },
  buttonView: {
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    margin: 30,
  },
  text: {
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 40,
    color: '#ffffff',
  },
  regularText: {
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 40,
    color: '#ffffff',
  },
  boldText: {
    fontFamily: 'WorkSans-Bold',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 40,
    color: '#ffffff'
  },
  backgroundImg: {
      flex: 1,
      resizeMode: 'cover',
  },
  nextButton: {
    alignSelf: 'flex-end',
  },
  responseTextbox: {
    backgroundColor: '#49AEE9',
    opacity: 0.7,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 10,
    height: screenHeight * 0.65,
    padding: 10,
    color: '#ffffff',
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 0.5,    
  },
});
