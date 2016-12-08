/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//简单场景（单独渲染的一个控件）
/*
import React, { Component } from 'react';
import  MyScene from './MyScene';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class YoDawgApp extends Component {
  render() {
    return (
       <MyScene />
    );
  }
}

AppRegistry.registerComponent('YoDawgApp', () => YoDawgApp);
*/

//导航栏
import React, {Component} from 'react';
import MyScene from './MyScene';

import {
  AppRegistry,
  Navigator,
  Text,
  View
} from 'react-native';

class SimpleNavigationApp extends Component {
  render(){
    return(
      <Navigator 
        initialRoute={{title: 'My Initial Scene', index: 0}}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            //刷新场景
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene' + nextIndex,
                index: nextIndex,
              });
            }}

            onBack={ () => {
              if (route.index > 0){
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

AppRegistry.registerComponent('YoDawgApp', () => SimpleNavigationApp);