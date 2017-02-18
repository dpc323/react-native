'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  AppState,
  Text,
  View
} = ReactNative;

var AppStateSubscription = React.createClass({
  getInitialState() {
    return {
      appState: AppState.currentState,
      previousAppStates: [],
      memoryWarnings: 0,
    };
  },
  componentDidMount: function() {
    AppState.addEventListener('change', this._handleAppStateChange);
    AppState.addEventListener('memoryWarning', this._handleMemoryWarning);
  },
  componentWillUnmount: function() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    AppState.removeEventListener('memoryWarning', this._handleMemoryWarning);
  },
  _handleMemoryWarning: function() {
    this.setState({memoryWarnings: this.state.memoryWarnings + 1});
  },
  _handleAppStateChange: function(appState) {
    var previousAppStates = this.state.previousAppStates.slice();
    previousAppStates.push(this.state.appState);
    this.setState({
      appState,
      previousAppStates,
    });
  },
  render() {
    if (this.props.showMemoryWarnings) {
      return (
        <View>
          <Text>{this.state.memoryWarnings}</Text>
        </View>
      );
    }
    if (this.props.showCurrentOnly) {
      return (
        <View>
          <Text>{this.state.appState}</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>{JSON.stringify(this.state.previousAppStates)}</Text>
      </View>
    );
  }
});

exports.title = 'AppState';
exports.description = 'app background status';
exports.examples = [
  {
    title: 'AppState.currentState',
    description: 'Can be null on app initialization',
    render() { return <Text>{AppState.currentState}</Text>; }
  },
  {
    title: 'Subscribed AppState:',
    description: 'This changes according to the current state, so you can only ever see it rendered as "active"',
    render(): ReactElement<any> { return <AppStateSubscription showCurrentOnly={true} />; }
  },
  {
    title: 'Previous states:',
    render(): ReactElement<any> { return <AppStateSubscription showCurrentOnly={false} />; }
  },
  {
    platform: 'ios',
    title: 'Memory Warnings',
    description: 'In the IOS simulator, hit Shift+Command+M to simulate a memory warning.',
    render(): ReactElement<any> { return <AppStateSubscription showMemoryWarnings={true} />; }
  },
];
