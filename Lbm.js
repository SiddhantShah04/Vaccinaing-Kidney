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
export default class Lbm extends React.Component {
	
  static navigationOptions = {
    headerTitle: 'LBM Calculator',
  };
  constructor(props) {
    super(props);
	this.state ={	
		weight:'',
		height:'',
		result:'',
		buttonState:true,
		gender:'',
	} 
  }
 handleChange = () =>{ 
		let Weight=parseFloat(this.state.weight)
		let Height=parseFloat(this.state.height)
	
		let w,h,t;
		if(this.state.gender === "Male"){
		w = 1.10 * Weight 
		h = 128 *(( Weight*Weight)/((100 * Height)*(100 * Height)))
		t=w-h
		}else{
			w = 1.07 * Weight 
			h = 148 *(( Weight*Weight)/((100 * Height)*(100 * Height)))
		t=w-h
		}
		
		  this.setState({result:t})	  
  	}
  render(){
	  return(
		<View  style={styles.container}>
			<View style={{marginLeft:10,marginRight:10}}> 
			<View style={{marginTop:20}}>
				<Text  style={styles.text}  >Weight in kg : </Text>
				<TextInput style={styles.input}  value={this.state.weight} keyboardType="numeric" maxLength={4} onChangeText = {(weight)=>{this.setState({weight})}}/>  
			</View>
			<View style={{marginTop:15}}>
				<Text  style={styles.text} >Height in meter : </Text>
				<TextInput style={styles.input}  value={this.state.height} keyboardType="numeric" maxLength={4} onChangeText = {(height)=>{this.setState({height})}}/>  
			</View>
			<View style={{marginTop:15,marginBottom:20}}>
				<Text  style={styles.text}  >Gender</Text>
				<Picker style={styles.pickerStyle} selectedValue = {this.state.gender} onValueChange = {(gender)=>{this.setState({gender,buttonState:false})}}>
						<Picker.Item label="Select a gender" value="" />
						<Picker.Item label="Male" value="Male" />
						<Picker.Item label="Female" value="Female" />					
					</Picker> 
			</View>
			<Button title="Calculate" onPress={() => this.handleChange()} disabled={this.state.buttonState} />
				<Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>Result:</Text>	
				<Text style={{fontSize:18,textDecorationLine: 'underline'}}>Your LBM Value : <Text style={{fontWeight:'bold'}}>{this.state.result}</Text></Text>
			
			</View>
		</View>
		
	  )
  }
}