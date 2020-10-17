import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput, ToastAndroid} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from '../styles/NewLabelPageStyle';

import {saveLabel} from '../components/fileOps';

export default function WelcomeComp({ navigation }) {
  const [label, setLabel] = useState('');
  const [qrImage, setqrImage] = useState('');
  const[save,setSave] = useState(true);

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    var random = Math.floor(Math.random() * 1000) + 1;
    setqrImage(
      date +
        '' +
        month +
        '' +
        year +
        '' +
        hours +
        '' +
        min +
        '' +
        sec +
        '-' +
        random.toString(),
    );
    //console.log(qrImage);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <QRCode
          value={qrImage ? qrImage : 'NA'}
          size={200}
          color="black"
          backgroundColor="white"
        />
      </View>

      <View style={styles.middleArea}>
        <Text style={styles.labelTitleText}> Label Name :</Text>
        <View style={styles.labelNameContainer}>
          <TextInput
            value={label}
            onChangeText={(text) => setLabel(text)}
            style={styles.labelName}
            maxLength={100}
            placeholder="Enter Label Name"
          />
        </View>
      </View>

      <View style={styles.bottomArea}>
      {save && <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            console.log(qrImage);
            console.log(label);
            saveLabel(qrImage, label).then(()=>{
              ToastAndroid.show("Label Created", ToastAndroid.SHORT);
              setSave(false);
              navigation.navigate('ItemList',{
                file:qrImage,
                title:label
              })
            })
          }}>
          <Text style={styles.buttonContainerText}>Save</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
}
