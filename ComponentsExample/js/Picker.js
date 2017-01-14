

import React, {Component} from 'react';
import {
  Picker,
} from 'react-native';

export default class PickerExample extends Component
{
  constructor(props){
    super(props);
    this.state = {
      // language : "language"
    };

    // // onValueChange = () =>{

    // // };

    // this.setState =  (lang) => {
    //     this.state.language : lang
    // };
  }

  render(){
    return(
      <Picker
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />           
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="iOS" value="iOS" />
          <Picker.Item label="android" value="android" />
          <Picker.Item label="reactnnative" value="reactnnative" />
          <Picker.Item label="node.js" value="node.js" />
      </Picker>
    );
  }
}
 

