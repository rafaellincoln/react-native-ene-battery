/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View
} from 'react-native';

const RNEneBattery = NativeModules.EneBattery;

export default class EneBattery extends Component {

  constructor(props) {
    super(props)

    this.state = {
      batteryLevel: '0%',
    }

  }

  componentWillMount() {
    RNEneBattery.getBatteryPercentage((batteryLevel) => {
      this.setState({
        batteryLevel,
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.instructions}>
          Battery Level {this.state.batteryLevel}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('EneBattery', () => EneBattery);
