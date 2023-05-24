import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
     this.state.name === ''
       ? alert('Please Enter a word')
       : Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.textContainer1}>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Text To Speech Converter',
            style: { color: 'cyan', fontSize: 30, fontWeight: 'bold' },
          }}
        />

        <Text style={styles.text2}> Enter The Word </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.name}
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={this.speak}>
            <Text style={styles.text1}>Hear</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 50,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    borderRadius: 10,
    backgroundColor: 'blue',
    borderColor: 'cyan',
    color: 'cyan',
    fontWeight: 'bold',
    fontSize: 35
  },
  textContainer1: {
    backgroundColor: 'orange',
    flex: 1,
  },

  text2: {
    color: 'blue',
    fontSize: 40,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 50
  },
   text1: {
    color: 'blue',
    fontSize: 40,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
   },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'cyan',
    marginTop: 50,
    borderRadius: 50,
    width: 150,
    alignSelf: 'center',
    height: 60,
    borderColor: 'blue',
    borderWidth: 4,
    justifyContent: 'center'
  },
})