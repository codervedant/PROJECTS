import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
export default class DJButton extends React.Component {
  playSound = async () => {
    await Audio.setIsEnabledAsync(true);
    await Audio.Sound.createAsync(
      {
        uri: this.props.uri,
      },
      {
        shouldPlay: true,
      }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.soundButton, { backgroundColor: this.props.bgcolor }]}
        onPress={this.playSound}>
        <Text style={styles.soundButtonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  soundButton: {
    width: 250,
    height: 100,
    marginTop: 10,
    borderRadius: 500,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  soundButtonText: {
    color: "black",
    fontFamily: 'Arial',
    fontWeight: "bold",
    fontSize: 35,
    marginLeft: 45,
    marginTop: 25,
    justifyContent: "right",
    alignItems: "center"
  },
});
