import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  Modal,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
import * as RNFS from 'react-native-fs';

import styles from '../styles/ItemListPageStyle';
import ListItemComp from '../components/ListItemComp';
import {
  updateItem,
  addItemToList,
  removeItemfromList,
  addToKart,
} from '../components/fileOps';

export default function WelcomeComp({route, navigation}) {
  const [items, setItems] = useState(new Array());
  const [toggle, setToggle] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [addItemModal, setAddItemModal] = useState(false);

  const [currHeader, setCurrHeader] = useState({
    file: route.params.file,
    title: route.params.title,
  });
  const [currItem, setCurrItem] = useState({item: '', strikethrough: true});

  const [addItem, setAddItem] = useState('');

  var HPath = RNFS.DocumentDirectoryPath + '/LabelsHeading/HeadingList.json';
  var LPath = RNFS.DocumentDirectoryPath + '/LabelsData/' + currHeader.file+'.json'; //need to get data from props + navigation

  useEffect(() => {
    RNFS.readFile(LPath)
      .then((res) => {
        console.log('Toggle done');
        console.log(res);
        var LData = JSON.parse(res);
        setItems(LData.data);
        //setCurrHeader({file: 'testfile', title: 'Test Chopper'}); // get data from props
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
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>
            {currHeader.title}
        </Text>

      </View>
      <View style={styles.middleContainer}>
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

              <TouchableHighlight
                onPress={() => {
                  removeItemfromList(currHeader.file, currItem.item).then(
                    (res) => {
                      setModalVisible(!modalVisible);
                      setToggle(!toggle);
                    },
                  );
                }}>
                <Text style={styles.modalText}>Delete</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  addToKart(currItem.item).then(() => {
                    ToastAndroid.show('Added to Kart', ToastAndroid.SHORT);
                  });
                }}>
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
          keyExtractor={(item, index) =>
            index.toString() + item.item.toString()
          }
        />

        <Modal transparent={true} visible={addItemModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalHeadText}> : Add Item : </Text>

              <TextInput
                value={addItem}
                onChangeText={(text) => setAddItem(text)}
                style={styles.labelName}
                maxLength={100}
              />

              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  addItemToList(currHeader.file, addItem).then((res) => {
                    //console.log("res: "+res);
                    setAddItemModal(!addItemModal);
                    setToggle(!toggle);
                    setAddItem('');
                  });
                }}>
                <Text style={styles.textStyle}>Save & Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setAddItemModal(!addItemModal);
          }}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
