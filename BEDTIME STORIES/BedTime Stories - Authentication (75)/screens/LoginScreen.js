import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  showAlert(errorCode) {
    switch (errorCode) {
      case 'auth/too-many-requests':
        Alert.alert('To many requests\nTry again later');
        this.setState({
          email: '',
          password: '',
        });
        break;
      case 'auth/wrong-password':
        Alert.alert('Enter Correct password');
        this.setState({
          password: '',
        });
        break;
      default:
        this.setState({
          email: '',
          password: '',
        });
        return Alert.alert('Invalid email and password');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer1}>
          <Text style={styles.title}>Bedtime Stories</Text>
          <Image source={require('../assets/icon.png')} style={styles.image} />
          <TextInput
            placeholder="programmer@whitehatjr.com"
            placeholderTextColor="red"
            onChangeText={(emailText) => {
              this.setState({
                email: emailText,
              });
            }}
            value={this.state.email}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="orange"
            placeholderFontWeight="bold"
            onChangeText={(passwordText) => {
              this.setState({
                password: passwordText,
              });
            }}
            value={this.state.password}
            style={styles.textInput1}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.subContainer2}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              var email = await this.state.email;
              var password = await this.state.password;
              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                //firebase.auth().signInWithEmailAndPassword(emailId, password)
                //firebase.auth().signWithEmailAndPassword(email, password)
                //firebase.auth().signInWithEmailAndPassword()
                .then(() => {
                  this.props.navigation.navigate('WriteStory');
                  //this.props.navigation.navigate('writeStory')
                  //this.props.navigate('WriteStory')
                  //this.props.navigate.navigation('WriteStory')
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  return this.showAlert(errorCode);
                });
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c6382',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    padding: 25,
    color: '#ffff',
    marginTop: 30,
  },
  image: {
    width: '60%',
    height: '40%',
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#ffff',
    borderRadius: 20,
  },
  subContainer1: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer2: {
    flex: 0.4,
    alignItems: 'center',
  },
  textInput: {
    width: '70%',
    height: 50,
    borderWidth: 3,
    borderColor: 'red',
    padding: 10,
    marginBottom: 25,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'red',
  },
  textInput1: {
    width: '70%',
    height: 50,
    borderWidth: 3,
    borderColor: 'orange',
    padding: 10,
    marginBottom: 25,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 15,
    margin: 70,
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
