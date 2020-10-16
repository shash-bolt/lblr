import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  Modal,
  TouchableHighlight,
} from 'react-native';
import * as RNFS from 'react-native-fs';

import styles from '../styles/HeaderListPageStyle';
import HeaderItemComp from '../components/HeaderItemComp';
import {updateHeader, deleteLabel} from '../components/fileOps';

export default function WelcomeComp({ navigation }) {
  const [headers, setHeaders] = useState(new Array());
  const [toggle, setToggle] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currHeader, setCurrHeader] = useState({file: '', title: ''});
  const [editHeader, setEditHeader] = useState('');

  var HPath = RNFS.DocumentDirectoryPath + '/LabelsHeading/HeadingList.json';

  useEffect(() => {
    RNFS.readFile(HPath)
      .then((res) => {        
        console.log(res);
        var HData = JSON.parse(res);
        setHeaders(HData.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [toggle]);

  function handleNavigation(item) {
    console.log(' === ' + JSON.stringify(item));
    navigation.navigate('ItemList',{
      file:item.file,
      title:item.title
    })
  }

  function handleModal(item) {    
    setCurrHeader(item);
    setModalVisible(!modalVisible);
  }
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeadText}>
              Options for : {currHeader.title}
            </Text>

            <TouchableHighlight
              onPress={() => {
                setEditModalVisible(!editModalVisible);
                setEditHeader(currHeader.title);
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.modalText}>Edit Header</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
              deleteLabel(currHeader.file).then((res) => {
                //console.log("res: "+res);
                setModalVisible(!modalVisible);
                setToggle(!toggle);
              });
            }}>
              <Text style={styles.modalText}>Delete</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} visible={editModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeadText}>Edit Header: </Text>

            <TextInput
              value={editHeader}
              onChangeText={(text) => setEditHeader(text)}
              style={styles.labelName}
              maxLength={100}
            />

            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                updateHeader(currHeader.file, editHeader).then((res) => {
                  //console.log("res: "+res);
                  setEditModalVisible(!editModalVisible);
                  setToggle(!toggle);
                });
              }}> 
              <Text style={styles.textStyle}>Save & Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <FlatList
        data={headers}
        renderItem={({item}) => (
          <HeaderItemComp
            ListItem={item}
            Button=":"
            onPress={(item) => handleNavigation(item)}
            onButtonPress={(item) => handleModal(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString() + item.file.toString()}
      />
    </View>
  );
}
