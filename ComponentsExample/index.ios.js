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
  StyleSheet,
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
//  import WebView from './js/WebView';
// import {ActionSheetExample,ShareScreenshotExample} from './api/ActionSheetIOS';
// import {framework,title,description,examples} from './api/AdSupportIOS';
// import {AlertExample,SimpleAlertExampleBlock} from './api/Alert';
// import {framework,title,description,examples} from './api/AlertIOS';
// import {examples} from './api/Animated';
// import {examples} from './api/AppState';
// import CameraRoll from './api/CameraRoll';
// import {examples} from './api/Clipboard';
// import {examples} from './api/Geolocation';
// import Example from './api/Keyboard';
  //  import {examples} from './api/NetInfo';
   import PanResponderExample from './api/PanResponder';




export default class ComponentsExample extends Component {

  render() {
  
    return (
  <View style={{
              flex:1,
              marginTop: 20
  }}>
   {/*
          <ModalView />
          <NavigatorIOSView /> 
          <PickerView />  
          <PickerIOSView />
          <ScrollView/>
          <SegmentControlIOS />
          <Slide />
          <StatusBar />
          <SwitchView />
          <TabBarIOS />
          <TextDemo />

          {/*
            TextInput组件
          <View style={{flex:1}}>  
           <WithLabel />
           <TextEventsExample />
           <AutoExpandingTextInput />
           <RewriteExample />
           <TokenizedTextExample />
           <BlurOnSubmitExample />
          </View>
         <WebView.ScaledWebView />
        <ShareScreenshotExample />
        <ActionSheetExample />

        <Text>framework:{framework}</Text>
        <Text>title:{title}</Text>
        <Text>description:{description}</Text>
        <Text>examples:{examples[0].title}</Text>   //分开倒入es5写法下，数组的使用
        {examples[0].render()}

        <AlertExample />
        {examples[2].render()}  //AlertIOS例子，通过控制数组中index的数值来显示不同场景

        {examples[2].render()}  //Animated,动画场景在button点击时的效果

        //AppState 4个例子
     {examples[0].render()}
     {examples[1].render()}
     {examples[2].render()}
     {examples[3].render()}
      <CameraRoll />  //模拟器需开启相机权限，用了第三方库react-native-image-picker    
    {examples[0].render()} //定位信息
    <Example />

    //获取联网信息
    {examples[0].render()} 
    {examples[1].render()} 
    {examples[2].render()} 
    {examples[3].render()} 

  */}
    <PanResponderExample />
  </View>
      );     
  }
}

//此处指作为入口
AppRegistry.registerComponent('ComponentsExample', () => ComponentsExample);

