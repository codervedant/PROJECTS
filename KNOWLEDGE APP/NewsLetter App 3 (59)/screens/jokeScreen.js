import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class JokeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'jokerman',
            fontSize: 20,
            fontWeight: 'bold',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'darkorange',
          }}>
          Why did the kid throw his clock out the window? <br />
          <br />
          Ans- Because, He wanted to see time fly.{' '}
        </Text>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text
            style={{ fontFamily: 'jokerman', fontSize: 30, color: 'yellow' }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  buttons: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15,
    margin: 20,
    width: 140,
    height: 50,
  },
});
