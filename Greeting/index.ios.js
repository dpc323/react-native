/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';


class Greeting extends Component {
    render() {
        return (
                <View style={{alignItems: 'center'}}>
                <Greete name='Rexxar' />
                <Greete name='Jaina' />
                <Greete name='Valeera' />
                </View>
                );
    }
}


class Greete extends Component {
    render() {
        return (
                <Text>Hello {this.props.name}!</Text>
                );
    }
}

AppRegistry.registerComponent('Greeting', () => Greeting);
