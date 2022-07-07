import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeAreaView} />
        <Text style={styles.mainText}>Profile Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#debf65',
  },
  androidSafeAreaView: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  mainText: {
    flex: 1,
    fontFamily: 'bradely',
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
