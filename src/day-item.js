
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

var DayItem = React.createClass({
  render: function(){
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
});

var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

module.exports = DayItem;
