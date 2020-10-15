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
import ListItemComp from '../components/ListItemComp';
import {updateItem} from '../components/fileOps';

export default function WelcomeComp() {
  const [items, setItems] = useState(new Array());
  const [toggle, setToggle] = useState(true);
  
  const [modalVisible, setModalVisible] = useState(false);
  //const [editModalVisible, setEditModalVisible] = useState(false);
  
  const [currHeader, setCurrHeader] = useState({file: '', title: ''});
  const [currItem, setCurrItem] = useState({item: '', strikethrough: true});
  
  //const [editST, setEditST] = useState();

  var HPath = RNFS.DocumentDirectoryPath + '/LabelsHeading/HeadingList.json';
  var LPath = RNFS.DocumentDirectoryPath+ '/LabelsData' + '/testfile.json';//need to get data from props + navigation


  useEffect(() => {
    RNFS.readFile(LPath)
      .then((res) => {
        console.log('Toggle done');
        console.log(res);
        var LData = JSON.parse(res);
        setItems(LData.data);
        setCurrHeader({file: 'testfile', title: 'Test Chopper'}) // get data from props
      })
      .catch((e) => {
        console.log(e);
      });
  }, [toggle]);

  function handleModal(item) {
    console.log('Button pressed');
    setCurrItem(item);
    setModalVisible(!modalVisible);
  }
  return (
    <View style={styles.container}>
      
      
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeadText}>
              Options for : {currItem.item}
            </Text>

            <TouchableHighlight
              onPress={() => {
                updateItem(currHeader.file, currItem.item).then((res) => {                  
                  setToggle(!toggle);
                });
              }}>
              <Text style={styles.modalText}>StrikeThrough</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {}}>
              <Text style={styles.modalText}>Delete</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {}}>
              <Text style={styles.modalText}>Add to Cart</Text>
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
 
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItemComp
            ListItem={item}
            Button=":"
            onButtonPress={(item) => handleModal(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString() + item.item.toString()}
      />

    </View>
  );
}
