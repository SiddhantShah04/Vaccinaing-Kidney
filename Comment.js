import React from 'react';
import {Image,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class Comment extends React.Component{
	static navigationOptions = ({ navigation, screenProps }) => ({
	
	headerTitle:"Comment Zone",	
	
  })
  constructor(props){
	  super(props)
  }
	render(){
		return(
			<View>
				<Text>Hi</Text>
			</View>
		)
	}
}