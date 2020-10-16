import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {RNCamera} from 'react-native-camera';

import styles from '../styles/ScanPageStyle';
import * as RNFS from 'react-native-fs';

var labelHead = RNFS.DocumentDirectoryPath + '/LabelsHeading';

export default function WelcomeComp({ navigation }) {
  
  async function barcodeRecognized(barcodes) {
    if (barcodes != undefined) await barcodes[0].data;

    return barcodes[0].data;
  }

  return (
    <View style={styles.container}>
      <RNCamera
        // ref={(ref)=>{
        //   this.camera = ref;
        // }}
        style={{
          flex: 1,
          width: '100%',
        }}
        captureAudio={false}
        onGoogleVisionBarcodesDetected={(e) => {
          //console.log(e)
          barcodeRecognized(e.barcodes).then((res) => {
            var HPath = labelHead + '/HeadingList.json';           
            var title = '';
            RNFS.readFile(HPath)
              .then((res1) => {
                var HData = JSON.parse(res1);
                var index = HData.data.findIndex((item) => item.file === res);
                title = HData.data[index].title;
                return {file: res, title: title};
              })
              .then((item) => {
                navigation.navigate('ItemList', {
                  file: item.file,
                  title: item.title,
                });
              });
          });
        }}
        googleVisionBarcodeType={
          RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.QR_CODE
        }
      />
    </View>
  );
}
