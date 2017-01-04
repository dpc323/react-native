/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    DatePickerIOS,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default class DatePickerExample extends Component {
  //获取默认属性
  //getDefaultProps = function (){
  //  return {
  //    date: new Date(),
  //    timeZoneOffsetInHours:(-1) * (new Date()).getTimezoneOffset() / 60,
  //  };
  //}

  //初始化状态
  //getInitialState = function(){
    //  return{
    //    date: this.props.date,
    //    timeZoneOffsetInHours:this.props.timeZoneOffsetInHours,
    //  }
    //}

    constructor(props) {
        super(props);

        //let  date = new new Date();
        //let timeZoneOffsetInHours = timeZoneOffsetInHours:(-1) * (new Date()).getTimezoneOffset() / 60;

        //this.props = {
        //    date: new Date(),
        //    timeZoneOffsetInHours:(-1) * (new Date()).getTimezoneOffset() / 60,
        //};
        this.state = {
            date: new Date(),
            timeZoneOffsetInHours:(-1) * (new Date()).getTimezoneOffset() / 60,
        };
    }

  //选择更改时间
  onDateChange = (date) => {
    this.setState({date:date});
  }

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)){
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  }

  render() {
    return (
        <View>
          <WithLabel label="Value:">
            <Text>{
              this.state.date.toLocaleDateString() +
              ' ' +
              this.state.date.toLocaleTimeString()
            }</Text>
          </WithLabel>
            <WithLabel label="Value:">
                <Text>{
                    this.state.date.toLocaleDateString() +
                    ' ' +
                    this.state.date.toLocaleTimeString()
                }</Text>
            </WithLabel>
          <WithLabel label="Timezone:">
            <TextInput
                onChange={this.onTimezoneChange}
                style={styles.textinput}
                value={this.state.timeZoneOffsetInHours.toString()}
            />
            <Text> hours from UTC</Text>
          </WithLabel>
          <Heading label="Date + time picker" />
          <DatePickerIOS
              date={this.state.date}
              mode="datetime"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onDateChange}
          />
          <Heading label="Date picker" />
          <DatePickerIOS
              date={this.state.date}
              mode="date"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onDateChange}
          />
          <Heading label="Time picker, 10-minute interval" />
          <DatePickerIOS
              date={this.state.date}
              mode="time"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onDateChange}
              minuteInterval={10}
          />
      </View>
    );
  }
}

var WithLabel = React.createClass({
  render: function() {
    return (
        <View style={styles.labelContainer}>
          <View style={styles.labelView}>
            <Text style={styles.label}>
              {this.props.label}
            </Text>
          </View>
          {this.props.children}
        </View>
    );
  }
});

var Heading = React.createClass({
  render: function() {
    return (
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            {this.props.label}
          </Text>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  textinput: {
    height: 26,
    width: 50,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    fontSize: 13,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  labelView: {
    marginRight: 10,
    paddingVertical: 2,
  },
  label: {
    fontWeight: '500',
  },
  headingContainer: {
    padding: 4,
    backgroundColor: '#f6f7f8',
  },
  heading: {
    fontWeight: '500',
    fontSize: 14,
  },
});

AppRegistry.registerComponent('DatePickerExample', () => DatePickerExample);
