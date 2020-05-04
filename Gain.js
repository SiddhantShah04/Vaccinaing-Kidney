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
export default class Gain extends React.Component {
	 static navigationOptions = {
    headerTitle: '',
  };
  constructor(props) {
    super(props);
	this.state ={
		Dweight:'',
		iWeight:'  ',
	}    
  }
  
  handleWeightChange = (Dweight) =>{
    	this.setState({Dweight:Dweight})
		let per  = Dweight*(0.05)
		
		this.setState({iWeight:per})
  	}
  
  render(){
	  return(
		<View style={styles.container}>
		<View style={{marginLeft:20}}>
			<Text style={{fontSize:18,marginTop:10,color:'blue',fontWeight:'bold'}}>Ideal Interdialytic Weight Gain Calculator</Text>
			<View style={{marginTop:20}}>
				<Text  style={styles.text}  >Dry weight in Kg:</Text>
				<TextInput style={styles.input}  value={this.state.Dweight} keyboardType="numeric" maxLength={4} onChangeText = {this.handleWeightChange}/>  
			</View>
				<Text style={{fontSize:20,marginTop:35}}><Text style={{fontWeights:'bold'}}>Note:</Text> Your interdialytic weight gain should ideally be less than: <Text style={{fontWeight:'bold',textDecorationLine: 'underline',}}>{this.state.iWeight}</Text> kg.</Text>
		</View>
		</View>
		
	  )
  }
}