import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TextInput,
  Switch,
} from 'react-native';

import Button from 'react-native-button';

const HelloManager = NativeModules.HelloManager;

export default class CustomNativeModule extends Component {
  componentWillMount(){
    this.setState({
      greetingMessage: undefined,
      isAdmin: false
    });
  }

  greetUserCallback = () => {
    const state = this.state;

    HelloManager.greetUser(state.userName, state.isAdmin, this.displayResult);
  }

  displayResult = (result) => {
    this.refs.userName.blur();
    this.setState({greetingMessage: result});
  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput
        ref="userName"
        autoCorrect={false}
        style={styles.inputField}
        placeholder="Username"
        onChangeText={(text) => this.setState({userName: text})}/>

        <Text style={styles.label}>Admin</Text>
        <Switch style={styles.radio} onValueChange={(value) => this.setState({isAdmin: value})} value={this.state.isAdmin}/>
        
        <Button 
          containerStyle={styles.buttonContainer}
          style={styles.buttonStyle}
          onPress={this.greetUserCallback}>
          Greet (callback)
        </Button>

        <View style={styles.flexContainer}>
          <Text>Response: </Text>
          <Text>{this.state.greetingMessage}</Text>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    backgroundColor: 'black'
  },
  buttonStyle:{
    color: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CustomNativeModule', () => CustomNativeModule);
