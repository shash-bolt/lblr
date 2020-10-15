import { StyleSheet, Dimensions, StatusBar } from 'react-native'

let screenHeight = Dimensions.get("window").height - StatusBar.currentHeight;
let screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
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
  },
  openButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
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
  labelName:{
    backgroundColor: 'white',
    //width: '100%',
    borderBottomColor: 'black',
   borderBottomWidth: 1
  },
})