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
export default class Rfc extends React.Component {
	
  static navigationOptions = {
    headerTitle: 'RRF Calculator',
  };
  constructor(props) {
    super(props);
	this.state ={
		Iuv:'',
		Uuc:'',
		BUN:'',
		Bun2:'',
		Residual:'',
		Mean:'',
		Ip:'',
	
		result:'',
		buttonState:true,
	}
  }
 handleChange = () =>{ 
 console.log(this.state.Iuv,this.state.Uuc,this.state.Ip)
		let mean= (parseInt(this.state.BUN)+parseInt(this.state.Bun2))/2
		let R =(parseFloat(this.state.Iuv) * parseFloat(this.state.Uuc))/ parseFloat(this.state.Ip)
	  	  let RRF = Number(R/mean).toFixed(2)
		  this.setState({result:RRF+"mL/min",Mean:mean+"mg/dL"})
		  
  	}
  
  
  render(){
	  
	  return(
		<View  style={styles.container}>
			<ScrollView >
			<View style={{marginLeft:10,marginRight:10}}>
			<View style={{marginTop:20}}>
				<Text  style={styles.text}  >Interdialytic urine volume : </Text>
				<TextInput style={styles.input} placeholder="in mL"  value={this.state.Iuv} keyboardType="numeric" maxLength={4} onChangeText = {(Iuv)=>{this.setState({Iuv})}}/>  
			</View>
			
			<View style={{marginTop:15}}>
				<Text  style={styles.text} >Urine urea concentration : </Text>
				<TextInput style={styles.input} placeholder="mg/dl"  value={this.state.Uuc} keyboardType="numeric" maxLength={4} onChangeText = {(Uuc)=>{this.setState({Uuc})}}/>  
			</View>
			
			<View style={{marginTop:15}}>
				<Text  style={styles.text} >Interdialytic period : </Text>
				<TextInput style={styles.input} placeholder="min"  value={this.state.Ip} keyboardType="numeric" maxLength={4} onChangeText = {(Ip)=>{this.setState({Ip})}}/>  
			</View>
			
			<View style={{marginTop:15}}>
				<Text  style={styles.text} >BUN 1 (after 1st dialysis of week) : </Text>
				<TextInput style={styles.input} placeholder="mg/dl"  value={this.state.BUN} keyboardType="numeric" maxLength={4} onChangeText = {(BUN)=>{this.setState({BUN})}}/>  
			</View>
			<View style={{marginTop:15,marginBottom:20}}>
				<Text  style={styles.text} >BUN 2 (prior to 2nd dialysis of week) : </Text>
				<TextInput style={styles.input} placeholder="mg/dl"  value={this.state.Bun2} keyboardType="numeric" maxLength={4} onChangeText = {(Bun2)=>{this.setState({Bun2,buttonState:false})}}/>  
			</View>
			
			
			<Button title="Calculate" onPress={() => this.handleChange()} disabled={this.state.buttonState} />
			
				<Text style={{marginTop:10,fontSize:20,fontWeight:'bold'}}>Result:</Text>	
					<Text style={{fontSize:18,textDecorationLine: 'underline',marginBottom:40}}>Your Mean BUN : <Text style={{fontWeight:'bold'}}>{this.state.Mean} </Text></Text>
				<Text style={{fontSize:18,textDecorationLine: 'underline',marginBottom:40}}>And RRF Value : <Text style={{fontWeight:'bold'}}>{this.state.result}</Text></Text>
			</View>
			</ScrollView>
		</View>
		
	  )
  }
}