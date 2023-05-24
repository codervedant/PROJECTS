import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default class WeatherScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather = async () => {
    //chnage latitude and longitude
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            Weather : {this.state.weather.weather[0].description}
          </Text>
          <Text style={styles.text}>
            Wind Speed : {this.state.weather.wind.speed}
          </Text>
          <Text style={styles.text}>
            Temprature : {this.state.weather.main.temp}
          </Text>
          <Text style={styles.text}>
            Min Temprature : {this.state.weather.main.temp_min}
          </Text>
          <Text style={styles.text}>
            Max Temprature : {this.state.weather.main.temp_max}
          </Text>
          <Text style={styles.text}>
            Pressure : {this.state.weather.main.pressure}
          </Text>
          <Text style={styles.text}>
            Humidity : {this.state.weather.main.humidity}
          </Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text
              style={{ fontFamily: 'forte', fontSize: 30, color: 'lightblue' }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
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
  text: {
    fontFamily: 'forte',
    fontSize: 25,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
