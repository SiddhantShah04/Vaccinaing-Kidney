import React from 'react';

import {Image,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import LoginView from './login.js'

import SignUp from './signUp.js'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  Dashboard from './Dashboard'
import  Menu from './dashboardMenu'
import qA from './qA'
import HBVS from './HBVS'

const NavStack = createStackNavigator({
  One : LoginView,
  Two : SignUp,
  Three : Dashboard,
  Fouth:Menu,
  Fifth:qA,
  Sixth:HBVS,
},
 {
  defaultNavigationOptions: {
    
      headerTitleAlign: 'center'
  }
	
});
//this line is important in v3
const AppNavigator = createAppContainer(NavStack);

export default class App extends React.Component{
  constructor(props){
    super(props);
  } 
  render(){
    return(
      <HBVS />
    )
  }
} 
//mainfile