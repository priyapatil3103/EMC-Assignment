import React, {Component} from 'react';

import {StyleSheet,View,StatusBar,Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation';



import HomeScreen from'./HomeScreen';


 const { width, height } = Dimensions.get('window');
 const Navigation = createStackNavigator({

 
 
HomeScreen: {
    screen:HomeScreen,
    navigationOptions: {
    headerStyle:  {display:"none"},
    headerLeft: null
  },
  },



  });

  

 export default Navigation;


 


 

