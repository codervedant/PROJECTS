import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class HoroScopeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Curlz MT',
            fontSize: 30,
            color: 'purple',
            fontWeight: 'bold',
          }}>
          Something good is about to happen for you!{' '}
        </Text>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text
            style={{
              fontFamily: 'curlz mt',
              fontSize: 40,
              color: 'magenta',
              fontWeight: 'bold',
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
