import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  nextScreen() {
    this.props.navigation.navigate('GoScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.displayText}>
          Debugging is the most importanat part of programming since every
          program will always have bugs. One should stay calm and composed while
          debugging, it will help you to debug better. It is always a good
          practice to print values or statements in console or comment the
          sections of your code to identify and fix possible bugs. There are a
          few bugs in this program..Let's see if you can identify and fix them
          to go to the next screen using the "GO" button...All the best..!!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.nextScreen();
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayText: {
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
    alignItem: 'center',
  },
  buttonText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    alignText: 'center',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
});
