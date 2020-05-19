import React from 'react';
import {Image,Dimensions,ActivityIndicator,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet,Modal } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import  {Post, getPost,commentSend} from './api.js'
const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:10,
		marginLeft:10,
		marginRight:10,
	},
	com:{
		marginTop:10,
		borderTopWidth:0.5,
		
	},
	  input:{
		  flex:1,
    fontSize:18,
    
	marginLeft:20,
	marginRight:50,
	minHeight:40,
	borderBottomWidth:1,
	
  },
  inputContainer: {
	  
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:20,
      minHeight:45,
      marginTop:10,
	  marginBottom:10,
  },
  askQuestion:{
	  borderBottomWidth:0.4,
	  borderLeftWidth:0.4,
	  borderRightWidth:0.4,
	  borderTopWidth:0.4,
	  marginBottom:10,
	  borderRadius:25,
	  fontSize:20,
	  paddingLeft:10,
	  
  },
  questionText:{
	  fontSize:25,fontWeight:'bold',textAlign:'center'
  }
})

const Com  = (props) => {
	return(
		<View style={{borderTopWidth:1}}>
			<Text style={styles.questionText}><Text style={{fontSize:18}}>{props.t.Email}</Text>:{props.t.text}</Text>
			<Text >{props.t.date}</Text>
			<Text style={{textAlign:'center',fontSize:17}} onPress={props.changeCommentModal}>Add a comment...</Text>
		</View>
	)
}
const Showcomment = (props) => {
	return(
		<View style={styles.com,{marginLeft:20,borderTopWidth:1}}>
			<Text>{props.c.Email}:{props.c.message}</Text>
			<Text onPress={props.replay}>replay</Text>
		</View>
	)
}
export default class Comment extends React.Component{
	static navigationOptions = ({ navigation, screenProps }) => ({
	headerTitle:"Comment Zone",	
  })
  constructor(props){
	  super(props)
	  this.state={
		  Email:this.props.navigation.state.params.name,
		  modalVisible: false, 
		  Qtext:'',
		  text:[],
		  buttonState:true,
		  animating:true,
		  animating2:false,
		  animating3:false,
		  commentModalVisible:false,
		  comment:'',
		  getC:[],
		  cMDetails:[],
	  }
	this.getQuestion()
  }
  
  getQuestion = async() => {
	
	 	const response = await fetch("https://vkidneym.herokuapp.com/Post")
		const result = await response.json()   
		console.log(result)
	   this.setState({text:result,animating:false,modalVisible:false})
  }
	sendText = () => {
		this.setState({animating2:true})
		Post( this.state.Email,this.state.Qtext)
		setTimeout(this.getQuestion, 2000);
	}
	 sendComment = async(userId,postId) => {
		 this.setState({animating3:true,comment:''})
		const result = await commentSend(this.state.Email,postId,this.state.comment)
		console.log(result)
		
		this.setState({getC:result,animating3:false})
	 }
	 viewCommentModel(postId,text,userId,Email) { 
		 this.setState({cMDetails:[text,postId,userId,Email],commentModalVisible:true,animating3:true})
		 
		 this.getComment(postId)
	 }
	 getComment = async(postId) => {
		 this.setState({comment:''})
		 const response = await fetch("https://vkidneym.herokuapp.com/Comment?postId="+postId)
		const result = await response.json()
		this.setState({getC:result,animating3:false})
	 }
	 replay(Email){
	
		this.setState({comment:`@${Email },`,defaultF:true})
		
	 }
	render(){
		if(this.state.animating){
				return(
					<ActivityIndicator  animating = {this.state.animating} color = 'red' size = "large"style={styles.activityIndicator}/>
				) 
			}
		else{
		return(
		
		<View style={styles.container}>
		<Modal  visible={this.state.modalVisible}  animationType="slide">
		
			<View style={{marginLeft:10,marginRight:10,marginTop:20,}}>
				<View style={{alignItems:'center'}}>
					<Text>Ask our doctors anything</Text>
					<TextInput width={380} height={100} style={styles.askQuestion} multiline  placeholder="Add a Question" onChangeText ={(Qtext) => this.setState({Qtext})} />
				</View>
				<Button width={400} onPress={this.sendText}  title="Post" /> 
				<ActivityIndicator  animating = {this.state.animating2} color = 'red' size = "large"style={styles.activityIndicator}/>
				
				<Text  style={{textAlign:'center'}} onPress={() => this.setState({modalVisible:false})}>Back to Question page</Text>
			</View>
		</Modal>
		
			<View style={{flexDirection:'row',alignItems:'center',justifyContent: 'center',paddingBottom:10}}>
				<Text style={{color:'green',fontSize:25}}  onPress={() => { this.setState({modalVisible:true}) }}>Ask a Question</Text>
				<FontAwesome5 style={{marginLeft:10}} name="question" size={24} color="green" />
			</View>
			<View>
			
				{this.state.text.map((text) => 
						<>
						<Com changeCommentModal={() => {this.viewCommentModel(text.postId,text.text,text.userId,text.Email)}} t={text}/>
						
						</>
						
						)
					}
					<Modal  visible={this.state.commentModalVisible}  animationType="slide">
						<Text onPress={() => this.setState({commentModalVisible:false})} style={{fontSize:20,color:'red',marginLeft:10,marginTop:10}}>X</Text>
							<View style={{marginTop:10,flex:1}}>
								<Text style={styles.questionText}>{this.state.cMDetails[3]}:{this.state.cMDetails[0]}</Text>
									{this.state.animating3 == true ?
										<ActivityIndicator  animating = {this.state.animating3} color = 'red' size = "large"style={styles.activityIndicator}/>
									:
										this.state.getC.map((comment) =>
									<>
										<Showcomment c={comment} replay={() => {this.replay(comment.Email)}} />
									</>
									)
										
									
									}
									
								<View style={{flex:2,minHeight:20,width:Dimensions.get('window').width,position: "absolute",bottom:10,flexDirection:'row'}}>
									<TextInput style={styles.input}  autoFocus={true} multiline value={this.state.comment} onChangeText={(comment) => this.setState({comment})}  placeholder="Add a comment ..."  />
									<View style={{flex:3,position: "absolute",right:10,bottom:2,alignSelf: 'flex-end', }}>
									<Icon name="paper-plane" size={33} color="green"  onPress={ () => this.sendComment(this.state.cMDetails[2],this.state.cMDetails[1])}/>
									</View>
								</View>
							</View>
						</Modal>
			</View>
		</View>
		)
	}
	}
}


/*
<View style={styles.inputContainer}>
				<TextInput style={styles.input} multiline  placeholder="Add a comment"  />
			</View>
				<View style={{marginLeft:20,marginRight:20}}>
				<Button  />
				</View>
				
				<FontAwesome5 name="user-circle" size={28}/>	
*/