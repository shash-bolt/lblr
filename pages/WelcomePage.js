import React, {useEffect} from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
  ToastAndroid,
} from 'react-native';

import {initSetup} from '../components/fileOps';
import * as RNFS from 'react-native-fs';

import styles from '../styles/WelcomePageStyle';

export default function WelcomeComp({navigation}) {
  const initFilepath =
    RNFS.DocumentDirectoryPath + '/LabelsHeading' + '/HeadingList.json';

  useEffect(() => {
    async function initCheck() {
      if (await RNFS.exists(initFilepath)) {
        ToastAndroid.show('Welcome back !!', ToastAndroid.SHORT);
      } else {
        initSetup();
      }
    }
    initCheck();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/boards.jpg')}
        style={styles.backgroundPic}>
        <View style={styles.logoView}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('About');
          }}>
            <Image
              source={require('../assets/logo.jpg')}
              style={styles.logoPic}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate('Scan');
            }}>
            <Text style={styles.buttonContainerText}>Scanner</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate('HeaderList');
            }}>
            <Text style={styles.buttonContainerText}>My Labels</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate('NewLabel');
            }}>
            <Text style={styles.buttonContainerText}>Get a New label</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => {
             navigation.navigate('PrintLabels');
          }}>
            <Text style={styles.buttonContainerText}>Print Labels</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate('StoreList');
            }}>
            <Text style={styles.buttonContainerText}>Shopping List</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => {
              navigation.navigate('SearchItems');
          }}>
            <Text style={styles.buttonContainerText}>Search for Items</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
