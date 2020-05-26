import React from 'react';

import {Image,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';


import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';

export default class BUN extends React.Component {
	 static navigationOptions = ({ navigation, screenProps }) => ({
		headerTitle:"XYZ",	
	 })
	 constructor(props){
		 super(props);
		 this.state = {
			 uPost:'',
			 uPre:'',
			 result:0.0,
		 }
		 
			 
		 }
		 calculate = (uPre) => {
			 
			const sum = Number(100 * ( 1 - (this.state.uPost / uPre))).toFixed(2)
			 this.setState({uPre,result:sum})
		 }
	 
	 
	render(){
		return(
			<View style={styles.container}>
				<ScrollView>
				<View>
					<Text style={styles.header}>How to interpret your lab values?</Text>
					<Text style={styles.text}>When on dialysis, you will need to undergo regular blood investigations in order to keep your health in a good state. Your values/figures help your doctor decide 
						your treatment regime. Herewith
						embedded is a list of few routinely performed lab tests, their normal ranges, what do the deviations from normal ranges mean and what should
						you do to optimise your health.
					</Text>
					</View>
					<View style={{marginTop:10}}>
						<Text style={styles.header}>Viral markers</Text>
						<Text style={styles.text}>Viral markers are indicators of status of few dangerous viruses in your body, they are, hepatitis B, hepatitis C and Human Immunodeficiency Virus (HIV). The presence of these viruses calls for need of separate dialysis station; at least for hepatitis B and HIV. The downside is that these viruses are contagious and hence their transmission should be strictly avoided. They can get transmitted if proper precautions are not taken by the dialysis care team. </Text>
						<Text style={styles.text}>The positive side is that one i.e. Hepatitis B out of these 3 infections can be prevented through vaccination. Your dialysis care team can provide you a schedule for this vaccination. After completion of the first course of vaccination, it is vital to test whether the vaccine is potent in producing the desired protective effect. This testing is done through a blood test named <Text style={{fontWeight:'bold'}}>Antibody to hepatitis B surface antigen (anti‑HBs).</Text></Text>
				</View>
				
				<View  style={{marginTop:10}}>
					<Text style={{fontSize:18,textDecorationLine: 'underline'}}>Antibody test interpretation:</Text>
					<Text>Anti-Hbs antibody titre:</Text>
					<Text style={{marginLeft:5}}>0 mIU/ml - revaccination</Text>
					<Text style={{marginLeft:5}}>{"<"}10 mIU/ml – booster dose</Text>
					<Text style={{marginLeft:5}}>{">"}10 mIU/ml – repeat antibody test after 1 year.</Text>
				</View>
				
				<View style={{marginTop:10}}>
					<Text style={styles.header}>Dialysis Adequacy</Text>
					<Text style={styles.text}>Dialysis Adequacy measures the effectiveness of your dialysis treatments. It is important to receive enough dialysis to feel well and minimize the side effects of kidney failure. Dialysis adequacy can be measured in a number of ways:</Text>
					<View style={{marginLeft:10}}>
						<Text ><Text style={{fontSize:25,fontWeight:'bold',}}>{`\u2022`}</Text> How well you feel</Text>
						<Text ><Text style={{fontSize:25,fontWeight:'bold',}}>{`\u2022`}</Text> How much excess fluid you may have</Text>
						<Text ><Text style={{fontSize:25,fontWeight:'bold',}}>{`\u2022`}</Text> How well your blood pressure is controlled</Text>
						<Text ><Text style={{fontSize:25,fontWeight:'bold',}}>{`\u2022`}</Text> Results of certain lab values (discussed below)</Text>
					</View>
					
					<View  style={{marginTop:10}}>
						<Text style={styles.header}>BUN (Blood Urea Nitrogen)</Text>
						<Text style={styles.text}>The BUN is a measurement of waste products in the blood. Normal range for a person with kidney failure varies according to an individuals protein intake. Your values may range from 20-80 mg/dl when the labs are drawn prior to your dialysis treatment. This lab measurement is used in the adequacy calculations listed below.</Text>
				</View>
				
				<View  style={{marginTop:10}}>
						<Text style={styles.header}>URR (Urea Reduction Ratio)</Text>
						<Text style={styles.text}>URR is calculated from BUN levels, one drawn before and one drawn after your dialysis treatment. The URR is generally measured once per month. If you are dialyzing well, your URR should be at least 65%</Text>
						
						<View style={{flexDirection:'row',textContent:'center',textAlign:'center',alignItems:'center',marginTop:10}}>
							<Text style={{fontSize:18,fontWeight:'bold'}}>Urea Post HD   </Text><TextInput style={styles.input}  value={this.state.uPost}  keyboardType="numeric" maxLength={4} onChangeText = {(uPost)=>{this.setState({uPost})}}/>
						</View>
						<View style={{flexDirection:'row',textContent:'center',textAlign:'center',alignItems:'center',marginTop:10,marginLeft:14}}>
							<Text style={{fontSize:18,fontWeight:'bold'}}>Urea Pre HD  </Text><TextInput style={styles.input}  value={this.state.uPre}  keyboardType="numeric" maxLength={4} onChangeText = {this.calculate}/>
						</View>
						<View style={{marginTop:10,paddingTop:10}}>
							<Text style={{textAlign:'center',fontSize:16,textDecorationLine:'underline'}}>Result,based on Urea Post and Urea Pre value</Text>
							<Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:5}}>URR : {this.state.result}%</Text>
						</View>
						
				</View>
						
				</View>
				</ScrollView>
			</View>
			
		)
	}
}
const styles=
	 StyleSheet.create({
		 container:{
			 flex:1,
			 marginLeft:10,
			 marginTop:10,
			 marginRight:8,
			 marginBottom:20,
		 },
		 header:{
			fontWeight:'bold',
			fontSize:20,
		 },
		text:{
			marginTop:5,
			fontSize:15
		},
		input:{
		marginTop:2,
		borderColor: 'black',
		borderLeftWidth:2,
		borderRightWidth:2,
		borderTopWidth:2,
		borderBottomWidth: 2,
		width:150,
		height:45,
		fontSize:20,
		paddingLeft:10,
		},
	 })
