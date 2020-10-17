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
      <Text>
        Hey there..!! Hope this App helps you in organizing your containers.{'\n'}
        {'\n'}
        Steps:{'\n'}
        {'\n'}
        1. Get a 'QR Label'.{'\n'}
        2. Write in what all Items are in it.{'\n'}
        3. Repeat Steps 1 and 2 for all your containers.{'\n'}
        {'\n'}
        4. Get the QR Codes using the 'Print' option and stick it on the container.{'\n'}
        {'\n'}
        5. To check what's in a container, just scan using the 'Scanner'{'\n'}
        {'\n'}
        6. If you want to buy some 'items', just 'strike-through' and 'Add to Shopping List'.{'\n'}
        {'\n'}
        7. When you go to the store, check your 'Shopping List' for stuff to buy.{'\n'}

      </Text>
    </View>
  );
}
