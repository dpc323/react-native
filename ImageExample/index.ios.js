/**
 * Created by hanarobot on 17/1/9.
 */

'use strict';

var React = require('react');
var ReactNative = require('react-native');
const {AppRegistry} = require('react-native');

var {
    ActivityIndicator,
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
    } = ReactNative;
var ImageExample = React.createClass({
    render() {
        return (
            <View>
                <Image
                    style={styles.icon}
                    source={require('./img/icon.png')}
                />
                <Image
                    style={styles.logo}
                    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                />
            </View>
        );
    }
});

// module.exports = {ImageExample};

AppRegistry.registerComponent('ImageExample', ImageExample);
