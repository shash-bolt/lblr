import React, {Component, useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  ListItem,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/HeaderItemCompStyle';

export default function IngredientListItemComp(props) {
  return (
    <View style={styles.container}>
      <Text
        style={
          props.ListItem.strikethrough
            ? {...styles.listText, textDecorationLine: 'line-through', fontWeight: "normal"}
            : styles.listText
        }>
        {props.ListItem.item}
      </Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          props.onButtonPress(props.ListItem);
        }}>
        <Text style={styles.buttonContainerText}>{props.Button}</Text>
      </TouchableOpacity>
    </View>
  );
}
