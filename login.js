import * as React from 'react';
import {Image,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StackActions, NavigationActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
// You can import from local files

const logoutAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Three' })],
});
// https://stackoverflow.com/questions/42261011/react-navigation-switching-background-colors-and-styling-stacknavigator sta
export default class LoginView extends React.Component{
	
  static navigationOptions = {
          headerShown: false
      };
  constructor(props){
    super(props);
    this.state ={
      Email:'',
	  animating: false,
      Password:'',
      Dashboard:false,
	 view:false 
    }	
  }
  
	async componentDidMount (){
	   try {
    const value = await AsyncStorage.getItem('come')
    if(value !== null) {
				{this.props.navigation.dispatch(logoutAction)}
			 
		}
		else{
			this.setState({view:true})
		}
	} catch(e) {
		alert(e)
	}
  }
  
	 loeggedIn = () =>{
		 
		{this.props.navigation.dispatch(logoutAction)}
	 }
  login = async () => {
	  
	this.setState({animating: true })  
    const response = await fetch("https://vkidneym.herokuapp.com/login",{
      method : 'POST',
      cache: 'no-cache',
      credentials:'include',
      headers : {'Content-Type': 'application/json'},
      body:JSON.stringify({contactNumber:this.state.Email,Password:this.state.Password}),
    })
	
    const res= await response.text()
this.setState({animating: false,Email:res}) 
	
	if(res != "Invalid Email or Password"){
		this.textInput.clear()
		try {
			await AsyncStorage.setItem('come', res)
		} catch (e) {
		alert(e)
		}
		this.loeggedIn()
	}else{alert(res)}
		
  }

  handleEmailChange = (Email) =>{
    this.setState({Email:Email})
  }
  handlePasswordChange = (Password) =>{
    this.setState({Password:Password})
  }
  render(){
   if(this.state.view){
    return(
	
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{color:'white',fontSize:35,fontWeight:'bold',}}>Kidnified</Text>
        
        </View>
        <View style={styles.login}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
				maxLength={10}
				keyboardType="numeric"
              placeholder="Contact number"
            
			    value={this.state.Email}
                onChangeText = {this.handleEmailChange}
			
              underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.inputContainer}>  
            <TextInput style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
			  ref={input => { this.textInput = input }}
              value={this.state.Password}
              onChangeText = {this.handlePasswordChange}
              underlineColorAndroid='transparent'/>   
          </View>
          
        <TouchableOpacity style={styles.buttonContainer} onPress={this.login}>
          <Text style={{ color: 'white',fontSize:30,}} >Login</Text>
        </TouchableOpacity>
		<ActivityIndicator  animating = {this.state.animating} color = 'red'size = "large"style={styles.activityIndicator}/>
        <TouchableHighlight onPress={()=>{{this.props.navigation.navigate("Two")}}}>
            <Text style={{color:'blue',marginTop:30,fontSize:15,}} >Create a new account</Text>
        </TouchableHighlight>
        </View>
      </View>
    )
   }
   return(
	<View>
	</View>
   )
  }
}

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