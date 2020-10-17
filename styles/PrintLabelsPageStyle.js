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
  Area1:{
    height: screenHeight*0.24,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: "row" 
  }, 
  Area2:{
    height: screenHeight*0.24,
    width: screenWidth/2,
    borderColor: 'black',
    borderWidth: 1,
    alignItems:"center"
    
  }, 
  middleArea:{
    height: screenHeight * 0.45,
  },
  bottomArea:{
    height: screenHeight * 0.05,
    alignItems: "center",
    backgroundColor: 'pink'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    //margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: screenHeight*0.8,
  },
  openButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    margin: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalHeadText: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
});
