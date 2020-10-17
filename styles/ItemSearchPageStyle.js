import {StyleSheet, Dimensions, StatusBar} from 'react-native';

let screenHeight = Dimensions.get('window').height - StatusBar.currentHeight;
let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    //flex: 1
  },
  searchContainer: {
   width: screenWidth,
    height: screenHeight*0.15,
    //backgroundColor: 'pink'
  },
  searchBox: {
    flexDirection: 'row',
    width: screenWidth * 0.8,
    alignSelf: 'center',
    
  },
  listText: {
    backgroundColor: '#66abff',
    padding: 10,
    marginBottom: 5,
    flex: 1,
    textAlign: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    fontWeight: 'bold',
    fontSize: 17,
  },
  addButton: {
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#9d05f5',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.2,
  },
  buttonContainerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'sans-serif',
  },
  headerButton: {
    width: screenWidth * 0.6,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 5,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  resultContainer:{
    height: screenHeight*0.5,
    backgroundColor: 'lightblue'
  },
  resultBoxText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'sans-serif',
    margin: 5
    
  }
});
