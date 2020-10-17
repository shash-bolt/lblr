import { StyleSheet, Dimensions, StatusBar } from 'react-native'

let screenHeight = Dimensions.get("window").height - StatusBar.currentHeight;
let screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '80%',
        alignSelf: "center"
      },
      listText: {
        backgroundColor: "#66abff",
        padding: 10,
        marginBottom: 5,
        flex: 1,
        textAlign: "center",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        fontWeight: "bold",
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
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "#9d05f5",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainerText:{
      color : 'white',
      fontWeight: "bold",
      fontSize: 17,
      fontFamily: "sans-serif",      
  },
  headerButton:{
    width: screenWidth * 0.8,
  },
})