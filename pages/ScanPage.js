import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {RNCamera} from 'react-native-camera';

import styles from '../styles/ScanPageStyle';

export default function WelcomeComp() {
  function barcodeRecognized(barcodes) {
    if (barcodes != undefined)
      barcodes.forEach((barcode) => console.warn(barcode.data));
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
          barcodeRecognized(e.barcodes);
        }}
        googleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.QR_CODE}
      />
    </View>
  );
}
