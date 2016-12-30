/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Alert,
  View,
  Text,
} from 'react-native';

export default class Buttons extends Component {
   onButtonPress() {
      Alert.alert('Button has been pressed!');
    }

//错误写法
    // const onButtonPress = () => {
    // Alert.alert('Button has been pressed!');
    // };
// _onPressButton() {
//     Alert.alert('Button has been pressed!');
//   }

   render() {
    return (
       <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text>测试</Text>
          <Button
          onPress={this.onButtonPress}
          title="Press Me"
          accessibilityLabel="See an informative alert"
          />
          <Button
          onPress={this.onButtonPress}
          title="Press Me"
          accessibilityLabel="See an informative alert"
          />
          <Button
          onPress={this.onButtonPress}
          title="Press Purple"
          color="#841584"
          accessibilityLabel="Learn more about purple"
          />
          <Button
            onPress={this.onButtonPress}
            title="This looks great!"
            accessibilityLabel="This sounds great!"
          />
          <Button
            onPress={this.onButtonPress}
            title="Ok!"
            color="#841584"
            accessibilityLabel="Ok, Great!"
          />
       </View>
    );
  }
}

AppRegistry.registerComponent('Buttons', () => Buttons);

/*
use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  // AppRegistry,
  Alert,
  Button,
  View,
} = ReactNative;

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

module.exports //单个导出
exports.displayName = 'ButtonExample';
exports.framework = 'React';
exports.title = '<Button>';
exports.description = 'Simple React Native button component.';
exports.examples = [
  {
    title: 'Simple Button',
    description: 'The title and onPress handler are required. It is ' +
      'recommended to set accessibilityLabel to help make your app usable by ' +
      'everyone.',
    render: function() {
      return (
        <Button
          onPress={onButtonPress}
          title="Press Me"
          accessibilityLabel="See an informative alert"
        />
      );
    },
  },
  {
    title: 'Adjusted color',
    description: 'Adjusts the color in a way that looks standard on each ' +
      'platform. On iOS, the color prop controls the color of the text. On ' +
      'Android, the color adjusts the background color of the button.',
    render: function() {
      return (
        <Button
          onPress={onButtonPress}
          title="Press Purple"
          color="#841584"
          accessibilityLabel="Learn more about purple"
        />
      );
    },
  },
  {
    title: 'Fit to text layout',
    description: 'This layout strategy lets the title define the width of ' +
      'the button',
    render: function() {
      return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            onPress={onButtonPress}
            title="This looks great!"
            accessibilityLabel="This sounds great!"
          />
          <Button
            onPress={onButtonPress}
            title="Ok!"
            color="#841584"
            accessibilityLabel="Ok, Great!"
          />
        </View>
      );
    },
  },
  {
    title: 'Disabled Button',
    description: 'All interactions for the component are disabled.',
    render: function() {
      return (
        <Button
          disabled
          onPress={onButtonPress}
          title="I Am Disabled"
          accessibilityLabel="See an informative alert"
        />
      );
    },
  },
];
*/