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
export default class Urc extends React.Component {
	
  static navigationOptions = {
    headerTitle: 'Ultrafiltration Rate Calculator',
  };
  constructor(props) {
    super(props);
	this.state ={
		Dweight:'',
		pre:'',
		post:'',
		Duration:'',
		cZone:'',
		rate:'',
		
	}
    
  }

  
 handledurationChange = (Duration) =>{
    	
		this.setState({Duration:Duration})
		
		let sum = Number(((this.state.pre - this.state.post)*1000)/(this.state.Dweight*Duration)).toFixed(2)
	  	  
		  this.setState({rate:sum})
		  
		  if(sum >10 && sum < 13){
			  this.setState({cZone:"Moderately Unsafe Zone"})
		  }
		  else if (sum <10){
			  this.setState({cZone:"Safe Zone"})
		  }else {
			  this.setState({cZone:"Severely Unsafe Zone"})
		  }
  	}
  
  
  render(){
	  
	  return(
		<ScrollView  contentContainerStyle={styles.container}>
			<ScrollView style={{marginLeft:20,}}>
			<View style={{marginTop:20}}>
				<Text  style={styles.text}  >Pre-dialysis weight in kg:</Text>
				<TextInput style={styles.input}  value={this.state.Pre} keyboardType="numeric" maxLength={4} onChangeText = {(pre)=>{this.setState({pre:pre})}}/>  
			</View>
			
			<View style={{marginTop:15}}>
				<Text  style={styles.text} >Post-dialysis weight in kg:</Text>
				<TextInput style={styles.input}  value={this.state.Post} keyboardType="numeric" maxLength={4} onChangeText = {(post)=>{this.setState({post:post})}}/>  
			</View>
			
			<View style={{marginTop:15}}>
				<Text  style={styles.text}  >Dry weight in Kg:</Text>
				<TextInput style={styles.input}  value={this.state.Dweight} keyboardType="numeric" maxLength={4} onChangeText = {(Dweight)=>{this.setState({Dweight:Dweight})}}/>  
			</View>
			
			<View style={{marginTop:15}}>
				<Text  style={styles.text} >Duration of hemodialysis session in hours: </Text>
				<TextInput style={styles.input}  value={this.state.Duration} keyboardType="numeric" maxLength={4} onChangeText = {this.handledurationChange}/>  
			</View>
			
				<Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>Result:</Text>	
				<Text style={{fontSize:18,textDecorationLine: 'underline'}}>Ultrafiltration rate in ml/kg/hour : <Text style={{fontWeight:'bold'}}>{this.state.rate}</Text></Text>
			
				<Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>Interpretation: </Text>	
				<Text style={{fontSize:18,textDecorationLine: 'underline'}}>Your ultrafiltration rate is in :<Text style={{fontWeight:'bold'}}> {this.state.cZone} </Text></Text>
			
				<Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>Recommendation:  </Text>	
				<Text style={{fontSize:18,textAlign:'justify',marginRight:20,marginBottom:20,}}>Always aim to be in green zone, as rapid removal of fluid from body can lead to harmful consequences like severe muscle cramps, drop in blood pressure or at times life threatening consequences like myocardial stunning i.e. temporary but reversible damage to the heart, which can be very dangerous and can lead to hospital admission.</Text>
			</ScrollView>
		</ScrollView>
		
	  )
  }
}