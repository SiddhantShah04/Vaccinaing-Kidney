import React from 'react';

import {Image,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';



import LoginView from './login.js'
import Urc from './Urc.js'
import SignUp from './signUp.js'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  Dashboard from './Dashboard'
import  Menu from './dashboardMenu'
import qA from './qA'
import Gain from './Gain'
import QaHindi from './QaHindi'
import HBVS from './HBVS'
import PVS from './Pvs'
import IVS from './Ivs'
import BUN from './Bun'
import Dc from './Dc'
import Sn from './Sn'
import Comment from './Comment.js'

import AboutUs from './aboutUs'

const NavStack = createStackNavigator({
  One : LoginView,
  Two : SignUp,
  Three : Dashboard,
  Fouth:Menu,
  Fifth:qA,
  Sixth:HBVS,
  Seven:QaHindi,
  Eight:Gain,
  Nine:Urc,
  Ten:AboutUs,
  Eleven:PVS,
  Tweleve:IVS,
  Thirteen:Comment,
  fourteen:BUN,
  Fifteen:Dc,
  Sixteen:Sn,
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
	this.state={
		expoPushToken:'',
	}

  } 
 
  render(){
    return(
      <AppNavigator />
    )
  }
} 
//mainfile