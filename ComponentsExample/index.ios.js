/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';

// var ModalExample = require('./js/ModalExample');                    //      Modal组件  es5写法
//module.exports是export default方法，所以我可以在此处改名ModalExample为ModalView
// import ModalView from './js/ModalExample.js';   //      Modal组件  es6写法;

// import NavigatorIOSView from './js/NavigatorIOS'; //NavigatorIOS组件   运行未成功
// import PickerView from './js/Picker'              //Picker组件
// import PickerIOSView from './js/PickerIOS'              //PickerIOS组件
// import ProgressViewIOSView from './js/ProgressViewIOS'              //ProgressViewIOS组件
// import RefreshControlView from './js/RefreshControl'  
// import ScrollView from './js/ScrollView'            //ScrollView组件；运行成功没有看到效果
// import SegmentControlIOS from './js/SegmentedControlIOS'
// import Slide from './js/Slider'
  //  import StatusBar from './js/StatusBar'
  // import SwitchView from './js/Switch'
  // import TabBarIOS from './js/TabBarIOS'
    // import TextView from './js/Text'     //此处用module控制导入
  //  import {title,description,displayName,examples} from './js/Text'   //此二句代码为了测试exports.example
  //  var TextDemo = require('./js/Text');     
 // import {WithLabel,TextEventsExample, AutoExpandingTextInput,RewriteExample,TokenizedTextExample,BlurOnSubmitExample} from './js/TextInput';
 import WebView from './js/WebView';

export default class ComponentsExample extends Component {

  render() {
  
    return (
          //  <ModalView />
          //  <NavigatorIOSView /> 
          // <PickerView />  
          // <PickerIOSView />
          // <ScrollView/>
          // <SegmentControlIOS />
          // <Slide />
          // <StatusBar />
          // <SwitchView />
          // <TabBarIOS />
          // <TextDemo />

          /*
          TextInput组件
          <View style={{flex:1}}>  
           <WithLabel />
           <TextEventsExample />
           <AutoExpandingTextInput />
           <RewriteExample />
           <TokenizedTextExample />
           <BlurOnSubmitExample />
          </View>
          */
          <WebView.ScaledWebView />
      );     
  }
}

//此处指作为入口
AppRegistry.registerComponent('ComponentsExample', () => ComponentsExample);
