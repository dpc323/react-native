/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//简单控件
/*
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class MyScene extends Component {
  static defaultProps = {
    title: 'MyScene'
  }
  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    );
  }
}
*/

//导航栏
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
export default class MyScene extends Component{
    static PropTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }

    render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点我进入下一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我返回上一场景</Text>
        </TouchableHighlight>    
      </View>
    )
  }
} 