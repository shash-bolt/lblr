import {StyleSheet, Dimensions, StatusBar} from 'react-native';

let screenHeight = Dimensions.get('window').height - StatusBar.currentHeight;
let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoView: {
    height: screenHeight * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  buttonStyle: {
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
  labelName:{
    backgroundColor: 'white',
    width: screenWidth * 0.8,
    borderColor: 'black',
    borderWidth: 1
  },
  labelTitleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'sans-serif',
    padding: 5
  },
  labelNameContainer:{
    width: screenWidth,
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  middleArea:{
    height: screenHeight * 0.45,
  },
  bottomArea:{
    height: screenHeight * 0.2,
    alignItems: "center",
    backgroundColor: 'pink'
  }
});
