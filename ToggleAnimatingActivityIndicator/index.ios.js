/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ToggleAnimatingActivityIndicator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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

AppRegistry.registerComponent('ToggleAnimatingActivityIndicator', () => ToggleAnimatingActivityIndicator);
*/

'use strict';

import React, { Component } from 'react';
const ReactNative = require('react-native');
const {
  AppRegistry,
  ActivityIndicator,
  StyleSheet,
  View,
} = ReactNative;
const TimerMixin = require('react-timer-mixin');

class ToggleAnimatingActivityIndicator extends Component {
  mixins: [TimerMixin]

  constructor(props) {
    super(props);
    this.state = { animating: true,};

    setInterval(() => {
      this.setState({animating: !this.state.animating});
      // this.setToggleTimeout();
    }, 2000);

    // componentDidMount(() => {
    //   this.setInterval();
    // });
  }
  
  render() {
    return (
      <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
    );
  }
}

exports.displayName = (undefined: ?string);
exports.framework = 'React';
exports.title = '<ActivityIndicator>';
exports.description = 'Animated loading indicators.';

exports.examples = [
  {
    title: 'Default (small, white)',
    render() {
      return (
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          color="white"
        />
      );
    }
  },
  {
    title: 'Gray',
    render() {
      return (
        <View>
          <ActivityIndicator
            style={[styles.centering]}
          />
          <ActivityIndicator
            style={[styles.centering, {backgroundColor: '#eeeeee'}]}
          />
        </View>
      );
    }
  },
  {
    title: 'Custom colors',
    render() {
      return (
        <View style={styles.horizontal}>
          <ActivityIndicator color="#0000ff" />
          <ActivityIndicator color="#aa00aa" />
          <ActivityIndicator color="#aa3300" />
          <ActivityIndicator color="#00aa00" />
        </View>
      );
    }
  },
  {
    title: 'Large',
    render() {
      return (
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          color="white"
          size="large"
        />
      );
    }
  },
  {
    title: 'Large, custom colors',
    render() {
      return (
        <View style={styles.horizontal}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
          <ActivityIndicator
            size="large"
            color="#aa00aa"
          />
          <ActivityIndicator
            size="large"
            color="#aa3300"
          />
          <ActivityIndicator
            size="large"
            color="#00aa00"
          />
        </View>
      );
    }
  },
  {
    title: 'Start/stop',
    render() {
      return <ToggleAnimatingActivityIndicator />;
    }
  },
  {
    title: 'Custom size',
    render() {
      return (
        <ActivityIndicator
          style={[styles.centering, {transform: [{scale: 1.5}]}]}
          size="large"
        />
      );
    }
  },
];

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

AppRegistry.registerComponent('ToggleAnimatingActivityIndicator', () => ToggleAnimatingActivityIndicator);
