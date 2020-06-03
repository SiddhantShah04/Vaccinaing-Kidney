import * as React from 'react';
import {
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableHighlight,
  TextInput,
  FlatView,
  ScrollView,
  Button,
  Text,
  View,
  StyleSheet,
  Picker,
   ActivityIndicator
} from 'react-native';


import DatePicker from 'react-native-datepicker';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const styles={
	container:{
		flex:1,
		textAlign:'center',
		
		backgroundColor:'#e6e6fa'
	},
	text:{
		fontSize:18,
		fontWeight:'bold',
	},
	input:{
		marginTop:2,
		borderColor: 'black',
		borderLeftWidth:2,
		borderRightWidth:2,
		borderTopWidth:2,
		borderBottomWidth: 2,
		width:200,
		height:50,
		fontSize:20,
		paddingLeft:10,
	}
	
}
export default class Bmi extends React.Component {
  static navigationOptions = {
    headerTitle: 'BMI Calculator',
  };
  constructor(props) {
    super(props);
	this.state ={
		
		weight:'',
		height:'',
		result:'',
		buttonState:true,	
	} 
  }
 handleChange = () =>{
		let sum = Number(parseFloat(this.state.weight)/(parseFloat(this.state.height)*parseFloat(this.state.height))).toFixed(2)
		this.setState({result:sum})  
  	}
  
  
  render(){
	  
	  return(
		<View  style={styles.container}>
			<View style={{marginLeft:10,marginRight:10}}> 
			<View style={{marginTop:20}}>
				<Text  style={styles.text}  >Weight in kg : </Text>
				<TextInput style={styles.input}  value={this.state.weight} keyboardType="numeric" maxLength={4} onChangeText = {(weight)=>{this.setState({weight})}}/>  
			</View>
			
			<View style={{marginTop:15,marginBottom:20}}>
				<Text  style={styles.text} >Height in meter : </Text>
				<TextInput style={styles.input}  value={this.state.height} keyboardType="numeric" maxLength={4} onChangeText = {(height)=>{this.setState({height,buttonState:false})}}/>  
			</View>
			<Button title="Calculate" onPress={() => this.handleChange()} disabled={this.state.buttonState} />
				<Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>Result:</Text>	
				<Text style={{fontSize:18,textDecorationLine: 'underline'}}>Your BMI Value : <Text style={{fontWeight:'bold'}}>{this.state.result}</Text></Text>
			
			</View>
		</View>
		
	  )
  }
}