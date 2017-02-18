import React, { Component } from 'react';
import { Keyboard, TextInput ,StyleSheet} from 'react-native';

export default class Example extends Component {
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    alert('Keyboard Hidden');
  }

  render() {
    return (
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        placeholder="请输入文字"
        multiline={true}
        style={styles.multiline}
      />
    );
  }
}

var styles = StyleSheet.create({
  multiline: {
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    fontSize: 13,
    height: 100,
    width: 100,
    padding: 4,
    marginBottom: 4,
  },
});