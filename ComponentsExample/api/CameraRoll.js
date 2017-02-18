
/*  注释部分为运行时测试效果
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  CameraRoll,
  Image,
  Slider,
  StyleSheet,
  Switch,
  Text,
  View,
  TouchableOpacity
} = ReactNative;

// const invariant = require('fbjs/lib/invariant');

// const CameraRollView = require('./CameraRollView');

// const AssetScaledImageExampleView = require('./AssetScaledImageExample');

class CameraRollExample extends React.Component {
  state = {
    groupTypes: 'SavedPhotos',
    sliderValue: 1,
    bigImages: true,
  };
  _cameraRollView: ?CameraRollView;
  render() {
    return (
      <View>
        <Switch
          onValueChange={this._onSwitchChange}
          value={this.state.bigImages}
        />
        <Text>{(this.state.bigImages ? 'Big' : 'Small') + ' Images'}</Text>
        <Slider
          value={this.state.sliderValue}
          onValueChange={this._onSliderChange}
        />
        <Text>{'Group Type: ' + this.state.groupTypes}</Text>
        <CameraRollView
          ref={(ref) => { this._cameraRollView = ref; }}
          batchSize={20}
          groupTypes={this.state.groupTypes}
          renderImage={this._renderImage}
        />
      </View>
    );
  }

  loadAsset = (asset) => {
    if (this.props.navigator) {
      this.props.navigator.push({
        title: 'Camera Roll Image',
        component: AssetScaledImageExampleView,
        backButtonTitle: 'Back',
        passProps: { asset: asset },
      });
    }
  };

  _renderImage = (asset) => {
    const imageSize = this.state.bigImages ? 150 : 75;
    const imageStyle = [styles.image, {width: imageSize, height: imageSize}];
    const {location} = asset.node;
    const locationStr = location ? JSON.stringify(location) : 'Unknown location';
    return (
      <TouchableOpacity key={asset} onPress={ this.loadAsset.bind( this, asset ) }>
        <View style={styles.row}>
          <Image
            source={asset.node.image}
            style={imageStyle}
          />
          <View style={styles.info}>
            <Text style={styles.url}>{asset.node.image.uri}</Text>
            <Text>{locationStr}</Text>
            <Text>{asset.node.group_name}</Text>
            <Text>{new Date(asset.node.timestamp).toString()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  _onSliderChange = (value) => {
    const options = CameraRoll.GroupTypesOptions;
    const index = Math.floor(value * options.length * 0.99);
    const groupTypes = options[index];
    if (groupTypes !== this.state.groupTypes) {
      this.setState({groupTypes: groupTypes});
    }
  };

  _onSwitchChange = (value) => {
    invariant(this._cameraRollView, 'ref should be set');
    this._cameraRollView.rendererChanged();
    this.setState({ bigImages: value });
  };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  url: {
    fontSize: 9,
    marginBottom: 14,
  },
  image: {
    margin: 4,
  },
  info: {
    flex: 1,
  },
});

exports.title = 'Camera Roll';
exports.description = 'Example component that uses CameraRoll to list user\'s photos';
exports.examples = [
  {
    title: 'Photos',
    render(): React.Element<any> { return <CameraRollExample />; }
  }
];
*/


import React from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
PixelRatio,
TouchableOpacity,
Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
export default class App extends React.Component {
  state = {
    avatarSource: null,
    videoSource: null
  };
selectPhotoTapped() {
const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
ImagePicker.showImagePicker(options, (response) => {
console.log('Response = ', response);
if (response.didCancel) {
console.log('User cancelled photo picker');
      }
else if (response.error) {
console.log('ImagePicker Error: ', response.error);
      }
else if (response.customButton) {
console.log('User tapped custom button: ', response.customButton);
      }
else {
let source = { uri: response.uri };
// You can also display the image using data:
// let source = { uri: 'data:image/jpeg;base64,' + response.data };
this.setState({
          avatarSource: source
        });
      }
    });
  }
selectVideoTapped() {
const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      mediaType: 'video',
      videoQuality: 'medium'
    };
ImagePicker.showImagePicker(options, (response) => {
console.log('Response = ', response);
if (response.didCancel) {
console.log('User cancelled video picker');
      }
else if (response.error) {
console.log('ImagePicker Error: ', response.error);
      }
else if (response.customButton) {
console.log('User tapped custom button: ', response.customButton);
      }
else {
this.setState({
          videoSource: response.uri
        });
      }
    });
  }
render() {
return (
<View style={styles.container}>
<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
<View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
<Image style={styles.avatar} source={this.state.avatarSource} />
          }
</View>
</TouchableOpacity>
<TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
<View style={[styles.avatar, styles.avatarContainer]}>
<Text>Select a Video</Text>
</View>
</TouchableOpacity>
        { this.state.videoSource &&
<Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
        }
</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});