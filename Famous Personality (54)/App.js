import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';


class CharlesBabbage extends Component {
  displayAlert = () => {
   alert('The Father of Computing');
};
  render(){
   return(
    <Button
           title = "Charles Babbage" 
           color = "red" 
           onPress = {this.displayAlert}/>
);
}
}


class MahatmaGandhi extends Component {
  displayAlert = () => {
   alert('The Father of the Nation');
};
  render(){
   return(
    <Button
           title = "Mahatma Gandhi" 
           color = "blue"
           onPress = {this.displayAlert}/>
);
}
}


class NelsonMandela extends Component {
  displayAlert = () => {
   alert('The First Black President of South Africa');
};
  render() {
   return (
    <Button
           title = "Nelson Mandela"
           color = "purple"
           onPress = {this.displayAlert}/>
);
}
}


class MotherTeresa extends Component {
  displayAlert = () => {
   alert('Saint Teresa of Calcutta');
};
  render() {
   return (
    <Button
           title = "Mother Teresa"
           color = "green"
           onPress = {this.displayAlert}/>
);
}
}


export default class App extends Component {
  render() {
   return (
    <View>
     <View
          style = {{ width: 200, height: 100, marginTop: 80, marginLeft: 80 }}>
          <CharlesBabbage/>
     </View>

     <View
          style = {{ width: 200, height: 100, marginTop: 20, marginLeft: 80 }}>
          <MahatmaGandhi/>
     </View>

     <View
          style = {{ width: 200, height: 100, marginTop: 20, marginLeft: 80 }}>
          <NelsonMandela/>
     </View>

     <View
          style = {{ width: 200, height: 100, marginTop: 20, marginLeft: 80 }}>
          <MotherTeresa/>
     </View>
    </View>
);
}
}
