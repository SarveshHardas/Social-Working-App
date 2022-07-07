import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';

export default class SocialScreen extends Component {
  constructor() {
    super();
    this.state = {
      problem: '',
      solution: '',
      name: '',
    };
  }

  updateText = () => {
    this.setState({
      problem: '',
      solution: '',
      name: '',
      number: '',
      address: '',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeAreaView} />
        <Text style={styles.mainText}>Socio-worker</Text>
        <ScrollView>
          <TextInput
            style={styles.textinput}
            placeholder={'Name'}
            onChangeText={(text) =>
              this.setState({
                name: text,
              })
            }
            placeholderTextColor={'black'}
            value={this.state.name}
            autoFocus
          />

          <TextInput
            style={styles.textinput}
            placeholder={'Mobile Number'}
            onChangeText={(text) =>
              this.setState({
                number: text,
              })
            }
            placeholderTextColor={'black'}
            value={this.state.number}
            autoFocus
          />

          <TextInput
            style={styles.textinput}
            placeholder={'Address'}
            onChangeText={(text) =>
              this.setState({
                address: text,
              })
            }
            placeholderTextColor={'black'}
            value={this.state.address}
            autoFocus
          />

          <TextInput
            style={styles.textinput}
            placeholder={'Problem'}
            onChangeText={(text) =>
              this.setState({
                problem: text,
              })
            }
            placeholderTextColor={'black'}
            value={this.state.problem}
            autoFocus
          />
          <TextInput
            style={styles.textinput}
            placeholder={'Any Suggestions'}
            onChangeText={(text) =>
              this.setState({
                solution: text,
              })
            }
            placeholderTextColor={'black'}
            value={this.state.solution}
            autoFocus
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert(
            'Your issue has been submitted. Action will be taken soon as per your suggestions.'
            );
            this.updateText();
          }}>
          <Text style={styles.googleText}>Submit</Text>
        </TouchableOpacity>
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
    marginTop: RFValue(35),
    marginBottom: RFValue(50),
    fontFamily: 'bradely',
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  textinput: {
    width: '75%',
    height: 55,
    padding: 10,
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 10,
    fontSize: 18,
    color: '#000000',
    fontFamily: 'bradely',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(36),
  },
  button: {
    width: RFValue(80),
    height: RFValue(50),
    justifyContent: 'center',
    alignSelf:'center',
    borderRadius: RFValue(30),
    backgroundColor: 'transparent',
    marginTop: RFValue(20),
    fontSize: 25,
  },
  googleText: {
    color: 'black',
    fontSize: RFValue(20),
    justifyContent:'center',
  },
});
