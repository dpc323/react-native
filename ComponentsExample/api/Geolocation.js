/*
iOS
你需要在Info.plist中增加NSLocationWhenInUseUsageDescription字段来启用定位功能。如果你使用react-native init创建项目，定位会被默认启用。

Android
要请求访问地理位置的权限，你需要在AndroidManifest.xml文件中加入如下一行：

<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

方法
static getCurrentPosition(geo_success: Function, geo_error?: Function, geo_options?: GeoOptions) 

成功时会调用geo_success回调，参数中包含最新的位置信息。支持的选项：timeout (ms), maximumAge (ms), enableHighAccuracy (bool)

static watchPosition(success: Function, error?: Function, options?: GeoOptions) 

持续监听位置，每当位置变化之后都调用success回调。支持的选项：timeout (ms), maximumAge (ms), enableHighAccuracy (bool)

static clearWatch(watchID: number) 

static stopObserving() 

*/
'use strict';


var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = ReactNative;

exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): ReactElement<any> {
      return <GeolocationExample />;
    },
  }
];

var GeolocationExample = React.createClass({
  watchID: (null: ?number),

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  },

  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  render: function() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
