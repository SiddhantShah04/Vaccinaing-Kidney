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
	  color: 'white',fontSize:28,marginLeft:5
  }
})



//onPress={()=> alert("Pressed")}
class DashItems extends React.Component{
	
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
static navigationOptions = ({ navigation, screenProps }) => ({
	headerStyle: {},
	title: "VKW",	
	headerRight: () =><Ionicons name="bars"size={30} style={{marginRight:13,color:'blue'}} onPress={(props)=>{navigation.navigate('Two')}}/>,
	headerLeft: () => <Text style={{marginLeft:5,fontSize:18,color:'red'}}  onPress={()=>alert("ok")} >Sign Out</Text>,
  })
	
	
  render(){
	  //DashItems all
    return(
      <ScrollView style={{flex:1}}>
		<View style={{flex:2,}}>
          <SliderBox images={this.state.images} />
		</View>
		<View style={{paddingTop:10,marginBottom:10,flex:5,alignItems: 'center',}}>
			<View style={{ }}>
				<TouchableOpacity style={style.input,{backgroundColor:"#2d3436",width:350,height:140,justifyContent: 'center',borderRadius:15, }} onPress={this.login}>
					<Text style={ style.buttonText} >Item1</Text>
				</TouchableOpacity>
			</View>
			<View style={{marginTop:10,height:144, }}>
				<View style={{flex:1,flexDirection:'row',justifyContent: 'center'}}>
					<TouchableOpacity style={style.input,{backgroundColor:"#0984e3",width:162,borderRadius:15,justifyContent: 'center'}} onPress={this.login}>
						<Text style={ style.buttonText} >Item2</Text>
					</TouchableOpacity>
				
					<TouchableOpacity style={style.input,{marginLeft:20,backgroundColor:"#d63031",width:162,borderRadius:15,justifyContent: 'center'}} onPress={this.login}>
						<Text style={ style.buttonText} >Item3</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{marginTop:10 }}>
				<TouchableOpacity style={style.input,{backgroundColor:"#fdcb6e",width:350,height:140,justifyContent: 'center',borderRadius:15, }} onPress={this.login}>
					<Text style={ style.buttonText} >Item4</Text>
				</TouchableOpacity>
			</View>
			
			<View style={{marginTop:10,height:144, }}>
				<View style={{flex:1,flexDirection:'row',justifyContent: 'center'}}>
					<TouchableOpacity style={style.input,{backgroundColor:"#0984e3",width:162,borderRadius:15,justifyContent: 'center'}} onPress={this.login}>
						<Text style={ style.buttonText} >Item5</Text>
					</TouchableOpacity>
				
					<TouchableOpacity style={style.input,{marginLeft:20,backgroundColor:"#d63031",width:162,borderRadius:15,justifyContent: 'center'}} onPress={this.login}>
						<Text style={ style.buttonText} >Item6</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
      </ScrollView>
    )
  }
}
class Menu extends React.Component{
  static navigationOptions = {
    headerTitle: 'Menu',
    headerTintColor:'blue',
  }
  render(){
  
    return(
      <View style={{flexDirection:'column'}}>
        <TouchableOpacity style={style.Options}>
            <Text style={{ color: '#6c757d',fontSize: 30, }}>Option1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.Options}>
            <Text style={{ color: '#6c757d',fontSize: 30,}}>Option2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.Options}>
            <Text style={{ color: '#6c757d',fontSize: 30, }}>Option3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.Options}>
            <Text style={{ color: '#6c757d',fontSize: 30,}}>Option4</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
const Nav = createStackNavigator({
  One : DashItems,
  Two:Menu,  
},
  {
  defaultNavigationOptions: {
      title: 'Centered',
      headerTitleAlign: 'center'
  }
	
});
const AppNav = createAppContainer(Nav);
export default class Dashboard extends React.Component{
  static navigationOptions = {
    headerShown: false
};
  render(){
    return(
	
      <AppNav />
    )    
  }
}
 