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
  StyleSheet,
} from 'react-native';

export default class MyButton extends Component {

   constructor(props){
     super(props)
     console.log("打印的属性数据:" + props.name );
       //可行
       //this.state = {
       //    name : props.name,
       //};
   }

    //不管用let 还是const定义一个字符串都报错,应该不能在此定义数据,数据要当成props或者state来传递吧
    //const output = "";
    //let output = {this.props.name};

   onButtonPress = (props) => {
        Alert.alert('按钮:'+ props.name +'\ntag:' +props.tag +"\nButton has been pressed!");
    }

//错误写法
    // const onButtonPress = () => {
    // Alert.alert('Button has been pressed!');
    // };

   render() {
    return (
       <View>
         <Button
             //onPress={(this.props.name) => this.onButton({this.props.name})Press}
             title={this.props.name}
             //箭头函数后面才是参数,前面()是标记,但是在定义时前面是参数
             onPress={()=> this.onButtonPress(this.props)}
             style={Styles.buttonstyle}
         />
       </View>
    );
  }
}

const Styles = StyleSheet.create({
  buttonstyle : {
      flex: 1,flexDirection: 'column',
      justifyContent: 'center',
      color: '#333333',
      borderRadius:20,
      width: 100,
      height: 40,
      backgroundColor: 'powderblue'
  },
  container : {
      flex: 1,
       flexDirection: 'column', 
  },
});

