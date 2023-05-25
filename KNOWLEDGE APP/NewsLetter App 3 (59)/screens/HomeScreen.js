import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
    };
  }
  likeCount = () => {
    this.setState({ like: this.state.like + 1 });
  };
  dislikeCount = () => {
    this.setState({ dislike: this.state.dislike + 1 });
  };
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('JokeScreen')}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'jokerman',
                  fontWeight: 'bold',
                  color: 'yellow',
                }}>
                Read a Joke
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HoroScopeScreen')}>
              <Text
                style={{
                  fontSize: 35,
                  fontFamily: 'Curlz MT',
                  fontWeight: 'bold',
                  color: 'magenta',
                }}>
                Horoscope
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('WeatherScreen')}>
              <Text
                style={{
                  fontSize: 40,
                  fontFamily: 'forte',
                  color: 'lightblue',
                }}>
                Weather
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('NewsScreen')}>
              <Text
                style={{
                  fontSize: 35,
                  fontFamily: 'Bernard MT Condensed',
                  color: 'lightgrey',
                }}>
                Top News
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text
              style={{
                textAlign: 'center',
                margin: 10,
                fontSize: 45,
                fontWeight: 'bold',
              }}>
              Rate us
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
              }}>
              <Text>{this.state.like}</Text>
              <Text>{this.state.dislike}</Text>
            </View>
            <TouchableOpacity onPress={this.likeCount}>
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.dislikeCount}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 125,
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: 'red',
    margin: 10,
    width: 250,
    height: 60,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
