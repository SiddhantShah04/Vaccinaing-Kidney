import React from 'react';

import {Image,Dimensions,TouchableOpacity,KeyboardAvoidingView,Modal,TouchableWithoutFeedback,TouchableHighlight,TextInput,FlatView, ScrollView,Picker,
 Button,Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';
import {gfr} from './Search.js'

const Interstage = (props) => {
	console.log(props.stage)
	if(props.stage=="Stage 2 Chronic Kidney Disease" ){
	return(
		<View style={{marginBottom:20}}>
			<Text style={styles.textstyle}>In Stage 2 CKD, the GFR is mildly decreased between 60-89, indicating the person has kidney damage and mild loss of kidney function. Similar to Stage 1 CKD, 
			following a healthy diet, controlling blood pressure and managing diabetes are key ways to slow the progression of CKD. Early CKD is usually diagnosed when there is: </Text>
			<Text>• High blood pressure</Text>
			<Text>• Higher than normal levels of creatinine or urea in the blood</Text>
			<Text>• Blood or protein in the urine</Text>
			<Text>• Evidence of kidney damage in an MRI, CT scan, ultrasound, or contrast X-ray</Text>
			<Text>• A family history of polycystic kidney disease (PKD)</Text>
		</View>
	)
	}
	else if(props.stage=="Stage 3A Chronic Kidney Disease" || props.stage=="Stage 3B Chronic Kidney Disease"){
		return(
			<View style={{marginBottom:20}}>
				<Text style={styles.textstyle}>Stage 3 CKD, a moderate decrease in kidney function, is divided into 3A (GFR is 45 to 59) and 3B (GFR is 30 to 44). 
				This can occur when someone is in stage 3 of CKD:</Text>
			<Text>• Waste products build up in the blood.</Text>
			<Text>• Symptoms include fatigue, too much fluid, urination changes, sleep problems and kidney pain.</Text>
			<Text>• You can often manage stage 3 by changing to a kidney-friendly diet plan as well as managing high blood pressure and diabetes.</Text>
			<Text>• Visit your doctor or nephrologist to help manage kidney disease through kidney-friendly living habits and possibly with prescription medication.</Text>
			</View>
		)
	}
		else if(props.stage=="Stage 5 Chronic Kidney Disease"){
		return(
			<View style={{marginBottom:20}}>
				<Text style={styles.textstyle}>A person with Stage 5 CKD has end stage renal disease (ESRD) with a GFR less than 15 ml/min. At this advanced stage of kidney disease, 
				the kidneys have lost nearly all their ability to do their job effectively, and eventually dialysis or a kidney transplant is needed to live.</Text>
			<Text style={styles.insideText}>•Symptoms include loss of appetite, nausea, itching, swelling and making little or no urine.
				People with Stage 5 CKD will need to consider a couple of different treatment options, such as dialysis (a treatment that removes wastes and excess fluid from your body) 
				or a kidney transplant.
			</Text>
			</View>
		)
		
	}
	else if(props.stage=="Stage 4 Chronic Kidney Disease"){
		return(
			<View style={{marginBottom:20}}>
				<Text style={styles.textstyle}>When CKD has progressed to Stage 4, it's time to begin preparing for dialysis and/or a kidney transplant. If GFR falls below 30, most people 
				need to find a kidney doctor (called a nephrologist) and talk about treatment options.</Text>
			<Text style={styles.insideText}>• People may develop complications, such as high blood pressure, anemia, bone disease and cardiovascular diseases.</Text>
			<Text style={styles.insideText}>• Symptoms include fatigue, back pain, nausea, taste changes, nerve problems and difficulty sleeping. Seeing a kidney doctor will help a person manage their disease.</Text>
			<Text style={styles.insideText}>• A dietitian is usually referred by a kidney doctor to help a person with kidney disease to learn more about the right kidney diet for them.</Text>
			</View>
		)
	}
	else if(props.stage=="Stage 1 Chronic Kidney Disease"){
		return(
			<View style={{marginBottom:20}}>
				<Text style={styles.textstyle}>Stage 1 CKD is diagnosed when a person has kidney damage and CKD risk factors with normal or high GFR. In Stage 1, there are often few to no
				symptoms. Management includes a healthy diet, blood pressure regulation and good glucose control in people with diabetes. Early CKD is usually diagnosed when there is:</Text>
			<Text style={styles.insideText}>• High blood pressure</Text>
			<Text style={styles.insideText}>• Higher than normal levels of creatinine or urea in the blood.</Text>
			<Text>• Blood or protein in the urine</Text>
			<Text>• A family history of polycystic kidney disease (PKD)</Text>
			<Text style={styles.insideText}>• Evidence of kidney damage in an MRI, CT scan, ultrasound, or contrast X-ray</Text>
			</View>
		)
	}
	
	else{
		return(null)
	}
}

export default class Gfr extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
	 //  const {state} = navigation;
	  
	headerTitle:"GFR Calculator",	
  })
	constructor(props) {
    super(props);
	this.state ={
		Dweight:'',
		age:'',
		sc:'',
		afA:'',
		buttonState:true,
		rate:'',
		gender:'',
		result:[],
	}
  }

  
 handleChange () {
	 
    	const result = gfr(this.state.age,this.state.sc,this.state.gender,this.state.afA)
		this.setState({result:result})
  	}
  
  
  render(){
	  
	  return(
		<ScrollView  contentContainerStyle={styles.container}>
			<ScrollView>
				<View style={{marginLeft:10,marginRight:10}}>
			<View style={{marginTop:20}}>
				<Text  style={styles.text}  >Age:</Text>
				<TextInput style={styles.input}  value={this.state.age} keyboardType="numeric" maxLength={2} onChangeText = {(age)=>{this.setState({age})}}/>  
			</View>
			
			<View style={{marginTop:15}}>
				<Text  style={styles.text} >Serum creatinine:</Text>
				<TextInput style={styles.input}  value={this.state.sc} placeholder="0.10 to 20.00" keyboardType="numeric" maxLength={5} onChangeText = {(sc)=>{this.setState({sc})}}/>  
			</View>
			
			<View style={{marginTop:15}}>
				<Text  style={styles.text}  >Gender</Text>
				<Picker style={styles.pickerStyle} selectedValue = {this.state.gender} onValueChange = {(gender)=>{this.setState({gender,buttonState:false})}}>
						<Picker.Item label="Select a gender" value="" />
						<Picker.Item label="Male" value="Male" />
						<Picker.Item label="Female" value="Female" />					
					</Picker> 
			</View>
			
			<View style={{marginTop:15,marginBottom:15}}>
				<Text  style={styles.text} >Are you African American? </Text>
				<Picker style={styles.pickerStyle} placeholder="yes or No" selectedValue = {this.state.afA} onValueChange = {(afA) => this.setState({afA})}>
						<Picker.Item label="No" value="No" />
						<Picker.Item label="Yes" value="Yes" />
					</Picker> 
			</View>
			<Button title="Calculate" onPress={() => this.handleChange()} disabled={this.state.buttonState} />
				<Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>Result </Text>	
				<Text style={{fontSize:16,textDecorationLine: 'underline',marginRight:5}}>Your GFR Value : <Text style={{fontWeight:'bold'}}>{this.state.result[0]} </Text></Text>
				<Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>Interpretation </Text>	
				<Text style={{fontSize:16,textDecorationLine: 'underline',marginRight:5}}>Your Stage :<Text style={{fontWeight:'bold'}}> {this.state.result[1]} </Text></Text>
				<Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>Recommendation:  </Text>	
				
				<View >
					<Interstage stage={this.state.result[1]} />
				</View>
				</View>
			</ScrollView>
		</ScrollView>
	  )
  }
}

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
	},
	textstyle:{
		fontSize:16,
		textAlign:'justify',
		
	},
	textstyle:{
		fontSize:15,
		textAlign:'justify',
		marginRight:20,
		marginBottom:20,
	},
}