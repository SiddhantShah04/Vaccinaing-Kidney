import * as React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome5';

import { SliderBox } from "react-native-image-slider-box";

const style = StyleSheet.create({
  Options:{
    height: 40,
    marginTop: 5,
    marginLeft:18,
    marginRight:15,
    borderColor: '#6c757d',
    paddingBottom:50,
    paddingTop:15,
    borderBottomWidth: 1,
  },
  input:{
       
    fontSize:20,
    color:'blue',
    paddingLeft:15,
	backgroundColor:"#00b894",
  },
  buttonText:{
	  color: 'white',fontSize:18,
	  marginLeft:5,
	  marginTop:8,
  }
})


//onPress={()=> alert("Pressed")}
 
//const AppNav = createAppContainer(Nav);

export default class Dashboard extends React.Component{
  static navigationOptions = ({ navigation, screenProps }) => ({
	  
	headerStyle: {
        backgroundColor: '#ffc0cb',
    },  
	headerTitle:"Kidnified",	
	headerLeft: () =><Ionicons name="bars"size={30} style={{marginLeft:13,color:'blue'}} onPress={(props)=>{navigation.navigate('Fouth',{name:`${navigation.state.params.name}`})}}/>,
  })
  text = " Ideal Interdialytic Weight Gain \n Calculator"

  constructor(props){
    super(props);
    this.state ={
      Dashboard:false,
	  images: [
        //"https://source.unsplash.com/1024x768/?tree", // Network image
        require('./assets/Dialysis_equipment_July-2019.jpg'),          // Local image
		require('./assets/doctor_450x300.jpg'),
		require('./assets/urology_med.jpg'),
		require('./assets/Vaccines_iStock.jpg'),
      ],
    }
  }
	q = () =>{
		 {this.props.navigation.navigate("Fifth")}
	}
	HVBS = () => {
		
	}
  
  render(){
	const {state} = this.props.navigation;
    return(
		<ScrollView style={{flex:1}}>
	  
		<View style={{flex:2,}}>
          <SliderBox  autoplay={true}  images={this.state.images} />
		</View>
		<View style={{paddingTop:10,marginBottom:10,flex:5,alignItems: 'center',}}>
			
			
			<View style={{ }}>
				<TouchableOpacity style={style.input,{backgroundColor:"#9b59b6",width:350,height:120,justifyContent: 'center',borderRadius:15, }} onPress={this.q}>
					<View style={{flexDirection:'row'}}>
						<Ionicons style={{marginLeft:10,}} name="book-reader" size={35} col/>
						<Text style={ style.buttonText} > Educate Yourself</Text>
					</View>
				</TouchableOpacity>
			</View>
			
			
			<View style={{ marginTop:10}}>
				<TouchableOpacity  style={style.input,{backgroundColor:"#b6c617",width:350,height:120,justifyContent: 'center',borderRadius:15, }} onPress={()=>{this.props.navigation.navigate("Sixth")}}>
					<View style={{flexDirection:'row'}}>
					<Ionicons style={{marginLeft:10,}} name="calendar-alt" size={35} col/>
					<Text style={ style.buttonText} > Hepatitis B Vaccine Schedule</Text>
					</View>
				</TouchableOpacity>
			</View>
			
			<View style={{ marginTop:10}}>
				<TouchableOpacity style={style.input,{backgroundColor:"#ff7675",width:350,height:120,justifyContent: 'center',borderRadius:15, }} onPress={this.login}>
					<View style={{flexDirection:'row'}}>
						<Ionicons style={{marginLeft:10,}} name="calendar-alt" size={35} col/>
						<Text style={ style.buttonText} > Pneumococcal Vaccine Schedule</Text>
					</View>
				</TouchableOpacity>
			</View>
			
			
			<View style={{marginTop:10 }}>
				<TouchableOpacity style={style.input,{backgroundColor:"#fdcb6e",width:350,height:120,justifyContent: 'center',borderRadius:15, }} onPress={this.login}>
					<View style={{flexDirection:'row'}}>
						<Ionicons style={{marginLeft:10,}} name="calendar-alt" size={35} />
						<Text style={ style.buttonText} > Influenza Vaccine Schedule</Text>
					</View>
				</TouchableOpacity>
			</View>
			
			
			
			<View style={{marginTop:10 }}>
				<TouchableOpacity style={style.input,{backgroundColor:"#8293ee",width:350,height:120,justifyContent: 'center',borderRadius:15, }} onPress={()=>{this.props.navigation.navigate("Nine")}}>
					<View style={{flexDirection:'row'}}>
						<Ionicons style={{marginLeft:10,}} name="calculator" size={35} />
						<Text style={ style.buttonText} > Ultrafiltration Rate Calculator</Text>
					</View>	
				</TouchableOpacity>
			</View>
						
			<View style={{marginTop:10 }}>
				<TouchableOpacity style={style.input,{backgroundColor:"#5f6714",width:350,height:120,justifyContent: 'center',borderRadius:15, }} onPress={()=>{this.props.navigation.navigate("Eight")}}>
					<View style={{flexDirection:'row'}}>
						<Ionicons style={{marginLeft:10,marginTop:10,}} name="calculator" size={35} />
						<Text style={ style.buttonText} >{this.text}</Text>
									
					</View>	
				</TouchableOpacity>
			</View>			
		</View>
      </ScrollView>                    
    )
  }
}
	
	
	
	
	
	
	
	
