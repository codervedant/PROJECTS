import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class InstagramScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style = {styles.text}>Instragram</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    text: {
      justifyContent: 'center',
      textAlign: 'center',
      color: 'purple',
      fontSize: '50',
      fontWeight: 'bold'
    }
  })