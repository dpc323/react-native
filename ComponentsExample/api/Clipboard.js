'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Clipboard,
  View,
  Text,
  Dimensions,
} = ReactNative;

var ClipboardExample = React.createClass({
  getInitialState() {
    return {
      content: 'Content will appear here'
    };
  },

  async _setClipboardContent(){
    let {height, width} = Dimensions.get('window');
    Clipboard.setString('设备宽: '+ width +', ' + '设备高: ' + height );
    try {
      var content = await Clipboard.getString();
      this.setState({content});
    } catch (e) {
      this.setState({content:e.message});
    }
  },

  render() {
    return (
      <View>
        <Text onPress={this._setClipboardContent} style={{color: 'blue'}}>
          Tap to put message in the clipboard
        </Text>
        <Text style={{color: 'red', marginTop: 20}}>
          {this.state.content}
        </Text>
      </View>
    );
  }
});

exports.title = 'Clipboard';
exports.description = 'Show Clipboard contents.';
exports.examples = [
  {
    title: 'Clipboard.setString() and getString()',
    render() {
      return <ClipboardExample/>;
    }
  }
];

