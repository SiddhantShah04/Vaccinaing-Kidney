import * as React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';

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
	  color: 'white',fontSize:20,marginLeft:5
  }
})



//onPress={()=> alert("Pressed")}
 

//const AppNav = createAppContainer(Nav);
export default class Dashboard extends React.Component{
	
  static navigationOptions = ({ navigation, screenProps }) => ({
	
	headerTitle:"VKW",	
	headerLeft: () =><Ionicons name="bars"size={30} style={{marginLeft:13,color:'blue'}} onPress={(props)=>{navigation.navigate('Fouth',{name:`${navigation.state.params.name}`})}}/>,
	 
  })
  
  constructor(props){
    super(props);
    this.state ={
      Dashboard:false,
	  images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        //require('./assets/images/girl.jpg'),          // Local image
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
					<Text style={ style.buttonText} >Educate Yourself</Text>
				</TouchableOpacity>
			</View>
			
			
			<View style={{ marginTop:10}}>
				<TouchableOpacity  style={style.input,{backgroundColor:"#2d3436",width:350,height:120,justifyContent: 'center',borderRadius:15, }} onPress={()=>{this.props.navigation.navigate("Sixth")}}>
					<Text style={ style.buttonText} >Hepatitis B Vaccine Schedule</Text>
				</TouchableOpacity>
			</View>
			
			<View style={{ marginTop:10}}>
				<TouchableOpacity style={style.input,{backgroundColor:"#ff7675",width:350,height:120,justifyContent: 'center',borderRadius:15, }} onPress={this.login}>
					<Text style={ style.buttonText} >Pneumococcal Vaccine Schedule</Text>
				</TouchableOpacity>
			</View>
			
			
			<View style={{marginTop:10 }}>
				<TouchableOpacity style={style.input,{backgroundColor:"#fdcb6e",width:350,height:120,justifyContent: 'center',borderRadius:15, }} onPress={this.login}>
					<Text style={ style.buttonText} >Influenz Vaccine Schedule</Text>
				</TouchableOpacity>
			</View>
						
		</View>
      </ScrollView>                    
    )
  }
}
	
	
	
	
	
	
	
	
