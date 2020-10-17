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

import styles from '../styles/ItemSearchPageStyle';
import HeaderItemComp from '../components/HeaderItemComp';
import {searchItems} from '../components/fileOps';

export default function WelcomeComp({navigation}) {
  const [label, setLabel] = useState('');
  const [headers, setHeaders] = useState({
    file: '',
    item: '',
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput
            value={label}
            onChangeText={(text) => setLabel(text)}
            style={styles.headerButton}
            maxLength={100}
            placeholder="Enter Item to search.."
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              if (label.length > 0)
                searchItems(label).then((res) => {
                  //console.log(res)
                  if (res.length > 0) {
                    setHeaders(res);
                    //console.log("Here")
                  }
                  else {
                    //console.log("Not ere")
                    setHeaders([{
                      file: 'Nothing found',
                      item: ' ',
                    }]);
                  }
                });

              //setHeaders([{file: "Test File", item: "Dal"}, {file: "Something 1", item: "Dal"}])
            }}>
            <Text style={styles.buttonContainerText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.resultContainer}>
        <FlatList
          data={headers}
          renderItem={({item}) => (
            // <HeaderItemComp
            //   ListItem={item}
            //   Button=":"
            //   onPress={(item) => handleNavigation(item)}
            //   onButtonPress={(item) => handleModal(item)}
            // />
            <View style={styles.resultBox}>
            <Text style={styles.resultBoxText}>
              {item.item} ===&gt; {item.file}
            </Text>
            </View>
          )}
          keyExtractor={(item, index) =>
            index.toString() + item.file.toString()
          }
        />
      </View>
    </View>
  );
}
