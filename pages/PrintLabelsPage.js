import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  TextInput,
  Modal,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import styles from '../styles/PrintLabelsPageStyle';
import * as RNFS from 'react-native-fs';
import HeaderItemComp from '../components/HeaderItemComp';

var HPath = RNFS.DocumentDirectoryPath + '/LabelsHeading/HeadingList.json';
let screenHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default function WelcomeComp({navigation}) {
  const [currBlock, setcurrBlock] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [headers, setHeaders] = useState(new Array());
  const [toggle, setToggle] = useState(true);

  const [qr1, setqr1] = useState({
    file: 'testfile',
    title: 'Test',
    show: false,
  });
  const [qr2, setqr2] = useState({
    file: 'testfile',
    title: 'Test',
    show: false,
  });
  const [qr3, setqr3] = useState({
    file: 'testfile',
    title: 'Test',
    show: false,
  });
  const [qr4, setqr4] = useState({
    file: 'testfile',
    title: 'Test',
    show: false,
  });
  const [qr5, setqr5] = useState({
    file: 'testfile',
    title: 'Test',
    show: false,
  });
  const [qr6, setqr6] = useState({
    file: 'testfile',
    title: 'Test',
    show: false,
  });
  const [qr7, setqr7] = useState({
    file: 'testfile',
    title: 'Test',
    show: false,
  });
  const [qr8, setqr8] = useState({
    file: 'testfile',
    title: 'Test',
    show: false,
  });

  function removeLabel() {
    switch (currBlock) {
      case 1:
        setqr1({...qr1, show: false});
        break;
      case 2:
        setqr1({...qr2, show: false});
        break;
      case 3:
        setqr1({...qr3, show: false});
        break;
      case 4:
        setqr1({...qr4, show: false});
        break;
      case 5:
        setqr1({...qr5, show: false});
        break;
      case 6:
        setqr1({...qr6, show: false});
        break;
      case 7:
        setqr1({...qr7, show: false});
        break;
      case 8:
        setqr1({...qr8, show: false});
        break;

      default:
        break;
    }
  }
  function handleNavigation(item) {
    console.log(' === ' + JSON.stringify(item));
    switch (currBlock) {
      case 1:
        setqr1({
          file: item.file,
          title: item.title,
          show: true,
        });
        break;
      case 2:
        setqr2({
          file: item.file,
          title: item.title,
          show: true,
        });
        break;
      case 3:
        setqr3({
          file: item.file,
          title: item.title,
          show: true,
        });
        break;
      case 4:
        setqr4({
          file: item.file,
          title: item.title,
          show: true,
        });
        break;
      case 5:
        setqr5({
          file: item.file,
          title: item.title,
          show: true,
        });
        break;
      case 6:
        setqr6({
          file: item.file,
          title: item.title,
          show: true,
        });
        break;
      case 7:
        setqr7({
          file: item.file,
          title: item.title,
          show: true,
        });
        break;
      case 8:
        setqr8({
          file: item.file,
          title: item.title,
          show: true,
        });
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    RNFS.readFile(HPath)
      .then((res) => {
        //console.log(res);
        var HData = JSON.parse(res);
        setHeaders(HData.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [toggle]);

  return (
    <View style={styles.container}>
      <View style={styles.Area1}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setcurrBlock(1);
          }}>
          <View style={styles.Area2}>
            {qr1.show && (
              <>
                <QRCode
                  value={qr1.file}
                  size={screenHeight * 0.2}
                  color="black"
                  backgroundColor="white"
                />
                <Text>{qr1.title}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setcurrBlock(2);
          }}>
          <View style={styles.Area2}>
            {qr2.show && (
              <>
                <QRCode
                  value={qr2.file}
                  size={screenHeight * 0.2}
                  color="black"
                  backgroundColor="white"
                />
                <Text>{qr2.title}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={styles.Area1}>
      <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setcurrBlock(3);
          }}>
          <View style={styles.Area2}>
            {qr3.show && (
              <>
                <QRCode
                  value={qr3.file}
                  size={screenHeight * 0.2}
                  color="black"
                  backgroundColor="white"
                />
                <Text>{qr3.title}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setcurrBlock(4);
          }}>
          <View style={styles.Area2}>
            {qr4.show && (
              <>
                <QRCode
                  value={qr4.file}
                  size={screenHeight * 0.2}
                  color="black"
                  backgroundColor="white"
                />
                <Text>{qr4.title}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.Area1}>
      <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setcurrBlock(5);
          }}>
          <View style={styles.Area2}>
            {qr5.show && (
              <>
                <QRCode
                  value={qr5.file}
                  size={screenHeight * 0.2}
                  color="black"
                  backgroundColor="white"
                />
                <Text>{qr5.title}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setcurrBlock(6);
          }}>
          <View style={styles.Area2}>
            {qr6.show && (
              <>
                <QRCode
                  value={qr6.file}
                  size={screenHeight * 0.2}
                  color="black"
                  backgroundColor="white"
                />
                <Text>{qr6.title}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.Area1}>
      <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setcurrBlock(7);
          }}>
          <View style={styles.Area2}>
            {qr7.show && (
              <>
                <QRCode
                  value={qr7.file}
                  size={screenHeight * 0.2}
                  color="black"
                  backgroundColor="white"
                />
                <Text>{qr7.title}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setcurrBlock(8);
          }}>
          <View style={styles.Area2}>
            {qr8.show && (
              <>
                <QRCode
                  value={qr8.file}
                  size={screenHeight * 0.2}
                  color="black"
                  backgroundColor="white"
                />
                <Text>{qr8.title}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomArea}>
        <TouchableOpacity>
        <Text>
          == Take Screenshot == 
        </Text>
        </TouchableOpacity>
        
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeadText}> : Select Label : </Text>
            <FlatList
              data={headers}
              contentContainerStyle={{alignItems: 'flex-start'}}
              renderItem={({item}) => (
                <HeaderItemComp
                  ListItem={item}
                  //Button=":"
                  onPress={() => handleNavigation(item)}
                  onButtonPress={() => {}}
                />
              )}
              keyExtractor={(item, index) =>
                index.toString() + item.file.toString()
              }
            />

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: 'purple'}}
              onPress={() => {
                removeLabel();
              }}>
              <Text style={styles.textStyle}>Remove label</Text>
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
    </View>
  );
}
