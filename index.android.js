
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DayItem from './src/day-item';


var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//It contains all the components that we want to use in our projects (Creation)
var ShowDays = React.createClass(
  //This object is set of all components
{
  render: function(){ //The render key and function value are necessary
    return <View style={styles.container}>
      <Text>Days of the week:</Text>
      <DayItem day={DAYS[0]}/>
    </View>
  }
});

//Style
var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center', //Vertical flex-end,flex-start
    alignItems: 'center' //Horizental flex-end,flex-start
  }
});
//Showing
AppRegistry.registerComponent('ShowDays',function(){
  return ShowDays;
});
