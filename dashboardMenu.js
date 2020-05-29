import React from 'react';

import {Image,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';

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
})

const logoutAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'One' })],
});

export default class Menu extends React.Component{
  static navigationOptions = {
	
	headerStyle: {
        backgroundColor: '#ffc0cb',
    },
	  
    headerTitle: 'Menu',
    headerTintColor:'blue',
  }
  
  reset = ()=>{
	  AsyncStorage.clear()
	this.props.navigation.dispatch(logoutAction);
  }
  render(){
  
    return(
	<View style={{flexDirection:'column'}}>
		<View style={{ marginTop:10,justifyContent: 'center', alignItems: 'center',}}>
			<Ionicons name="user-circle-o" size={88}/>
			<TouchableOpacity style={{marginTop:15}}>
			<Text style={{ color: '#6D214F',fontSize: 20,}}>{this.props.navigation.state.params.name}</Text>
        </TouchableOpacity>
		</View>
		  
		
		<TouchableOpacity style={style.Options}>
            <Text style={{ fontSize: 20, }} onPress={()=>this.props.navigation.navigate("Ten")}>About Kidnified</Text>
        </TouchableOpacity>
		
		<TouchableOpacity style={style.Options}>
            <Text style={{fontSize: 20, }} onPress={this.reset}>SignOut</Text>
        </TouchableOpacity>
		
    </View>
    )
  }
}
