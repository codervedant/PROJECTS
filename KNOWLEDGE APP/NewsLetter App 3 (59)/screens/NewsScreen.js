import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            justifyContent: 'center',
            fontFamily: 'Bernard MT Condensed',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'grey',
          }}>
          Windows 11 is set for release in year 2021.{' '}
        </Text>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text
            style={{
              fontFamily: 'Bernard MT Condensed',
              fontSize: 35,
              color: 'lightgrey',
            }}>
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
