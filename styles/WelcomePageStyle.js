import {StyleSheet, Dimensions, StatusBar} from 'react-native';

let screenHeight = Dimensions.get('window').height - StatusBar.currentHeight;
let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundPic: {
    resizeMode: 'cover',
    height: screenHeight,
    width: screenWidth,
  },
  logoPic: {
    resizeMode: 'center',
    height: screenHeight * 0.2,
    width: screenWidth * 0.5,
    borderRadius: screenHeight,
  },
  logoView: {
    height: screenHeight * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    height: screenHeight * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
    margin: 15,
    width: screenWidth * 0.8,
    alignItems: 'center',
    backgroundColor: '#9d05f5',
    opacity: 0.8,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  buttonContainerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'sans-serif',
  },
});
