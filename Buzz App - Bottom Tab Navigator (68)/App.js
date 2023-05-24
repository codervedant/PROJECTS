import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Header } from 'react-native-elements';
import FacebookScreen from "./screens/fb";
import InstagramScreen from "./screens/in";

export default class App extends React.Component {
  render() {
    return(
      <View>
      <AppContainer />
     <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: '#fff', fontSize: 20.5, fontWeight: 'bold' }
          }}
        /> </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
 Facebook:{screen: FacebookScreen},
 Instagram:{screen: InstragramScreen},
});

const AppContainer = createAppContainer(TabNavigator);