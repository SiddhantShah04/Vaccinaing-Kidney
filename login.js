import * as React from 'react';
import {Image,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import SignUp from './signUp.js'

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Dashboard from './Dashboard.js'
import {createStackNavigator} from 'react-navigation-stack';
// You can import from local files

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99CCFF',
  },
  login: {
    flex:3,    
    alignItems: 'center',
    marginTop:55,
  },
  header: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#483d8b',
    fontFamily:'sans-serif',
  },
  input:{
    borderBottomColor: '#FFFFFF',
    paddingTop: 23,
    fontSize:20,
    color:'blue',
    paddingLeft:15,
  },
  
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:25,
      width:340,
      height:65,
      marginTop:15,
  },
  buttonContainer: {
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:350,
    borderRadius:30,
    backgroundColor:"#00b5ec",
    marginTop:25,

  }
  
})
// https://stackoverflow.com/questions/42261011/react-navigation-switching-background-colors-and-styling-stacknavigator sta
export default class LoginView extends React.Component{
  static navigationOptions = {
          headerShown: false
      };
  constructor(props){
    super(props);
    this.state ={
      Email:'',
      Password:'',
      Dashboard:false
    }
  }
c = () =>  {
  console.log(this.state.Dashboard)
   this.setState({
      Dashboard: true
    })
  }

  render(){
     if(this.state.Dashboard) {return(<Dashboard />)}
   
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text accessibilityRole='header' style={{color:'white',fontSize:35,fontWeight:'bold',}}>Vaccinating</Text>
          <Text style={{color:'white',fontSize:20,}}> Kidney Warriors</Text>
        </View>
        <View style={styles.login}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.inputContainer}>  
            <TextInput style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>   
          </View>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} >
          <Text style={{ color: 'white',fontSize:30,}} onPress={this.c}>Login</Text>
        </TouchableOpacity>
        <TouchableHighlight>
            <Text style={{color:'blue',marginTop:15,fontSize:15,}} onPress={()=>{{this.props.navigation.navigate("Two")}}}>Create a new account</Text>
        </TouchableHighlight>
        </View>
      </View>
    )
  }
}
