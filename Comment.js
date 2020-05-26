import React from 'react';
import {Image,Dimensions,ActivityIndicator,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet,Modal } from 'react-native';
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
    fontSize:20,
	borderRadius:20,
	marginLeft:10,
	backgroundColor:'whitesmoke',
	marginLeft:10,
	marginRight:40,
	paddingLeft:10,
	minHeight:60,
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
	fontSize:17,
	marginTop:10,
fontFamily: 'sans-serif',
	fontWeight:'bold',
	marginLeft:10,  
  }
})

const Com  = (props) => {
	return(
		<View style={{backgroundColor:"white",marginTop:7,flex:1,borderRadius:20,paddingTop:5,paddingBottom:5}}>
			<View style={{flexDirection:'row',marginLeft:5,marginRight:5}}>
				<Text>{props.t.fullName}</Text>
				<Text style={{position: "absolute",right:10}}>{props.t.Email}</Text>
			</View>
			<Text style={styles.questionText}>{props.t.text}</Text>
			<View style={{marginTop:15}}>
			<Text style={{position:'absolute',right:10,bottom:0}}>{props.t.date}</Text>
			<Text style={{textAlign:'center',fontSize:17,textShadowRadius: 44,}} onPress={props.changeCommentModal}>Add a comment...</Text>
			</View>
		</View>
	)
}
const Showcomment = (props) => {
	let l = props.getC.filter( elt => elt.parentCommnetId != null & elt.parentCommnetId == props.c.commentId).length 
	return(
		<View style={{backgroundColor:'whitesmoke',marginTop:10,borderRadius:10,marginLeft:10,marginRight:10,marginBottom:25}}>
				<Text style={{fontFamily:'sans-serif',fontSize:15,marginLeft:5,marginTop:5}}><Text style={{fontWeight:'bold'}}>{props.c.fullName} </Text>
			 {props.c.message}</Text>
			<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}> 
				<Text style={{fontSize:15,marginLeft:10}}>{props.c.dateStamp}</Text>
				<Text onPress={props.replay} style={{position:'absolute',right:10}}>reply</Text>
			</View>
				{ l !=0 ?  
				<Text style={{marginLeft:1,marginTop:15,textAlign:'center',color:'blue',fontSize:16}} onPress={props.viewReplay}>View replies({l})</Text>
				:
				<Text style={{marginLeft:1,marginTop:15,textAlign:'center'}} >No reply yet</Text>
				}
			<View style={{marginBottom:10,marginLeft:40}}>{props.cm.map((r) => {
				if(props.c.commentId == r.parentCommnetId)
				{
					return(
					<View style={{borderTopWidth:5,borderColor:'white',paddingTop:20,paddingBottom:30}}>
						<Text><Text style={{fontWeight:'bold',marginTop:20,marginBottom:20}}>{r.fullName}</Text> {  r.message}</Text>
						<Text onPress={() => props.rereply(r.fullName,props.c.commentId)} style={{position:'absolute',right:10,bottom:2,fontSize:14}}>reply</Text>
						<Text style={{fontSize:12,position:'absolute',bottom:1}}>{r.dateStamp}</Text>
					</View>
						)
				}
			})}
				</View>
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
		  cr:[],
		  cMDetails:[],
		  commentId:null,
	  commentReplay:[],
		
	  }
	this.getQuestion()
	
  }
  
  getQuestion = async() => {
	
	 	const response = await fetch("https://vkidneym.herokuapp.com/Post")
		const result = await response.json()   
	   this.setState({text:result,animating:false,modalVisible:false})
  }
	sendText = async() => {
		this.setState({animating2:true})
		const result = await Post( this.state.Email,this.state.Qtext)
		this.setState({animating2:false,text:result,modalVisible:false})
		//setTimeout(this.getQuestion, 2000);
	}
	 sendComment = async(id,Email,postId) => {
		 this.setState({animating3:true,comment:''})
		 console.log(this.state.commentId)
		const result = await commentSend(this.state.commentId,Email,postId,this.state.comment)
		
		this.setState({getC:result,animating3:false,commentReplay:[],commentId:null})
		
		
	 }
	 viewCommentModel(postId,text,userId,fullName) { 
		 this.setState({cMDetails:[text,postId,userId,fullName],commentModalVisible:true,animating3:true})
		 this.getComment(postId)
	 }
	 getComment = async(postId) => {
		 this.setState({comment:''})
		 const response = await fetch("https://vkidneym.herokuapp.com/Comment?postId="+postId)
		const result = await response.json()
		//console.log(result)
		
		this.setState({getC:result,animating3:false})
	 }
	 replay = (fullName,id) => {
		this.setState({commentId:id,comment:`@${  fullName  }, `,defaultF:true})	
	 }
	viewReplay(id){
		
		this.setState({commentReplay:this.state.getC.filter(elt => elt.parentCommnetId == id)})
	
	 }
	render(){ 
		if(this.state.animating){
				return(
					<ActivityIndicator  animating = {this.state.animating} color = 'red' size = "large"style={styles.activityIndicator}/>
				) 
			}
		else{
			return(
			<>
				<View  style={styles.container}>
					<View style={{flexDirection:'row',alignItems:'center',justifyContent: 'center',paddingBottom:10}}>
						<Text style={{color:'green',fontSize:25}}  onPress={() => { this.setState({modalVisible:true}) }}>Ask a Question</Text>
						<FontAwesome5 style={{marginLeft:10}} name="question" size={24} color="green" />
					</View>
					<Text style={{textAlign:'center',textShadowRadius: 44,backgroundColor:'white'}}>Previously asked questions </Text>
					<ScrollView>
						{this.state.text.map((text) => 
								<Com changeCommentModal={() => {this.viewCommentModel(text.postId,text.text,text.userId,text.fullName)}} t={text}/>
							)
						}
					</ScrollView>
				</View>
				
				<Modal   visible={this.state.modalVisible}  animationType="slide">
					<View style={{marginLeft:10,marginRight:10,marginTop:20,}}>
						<View style={{alignItems:'center'}}>
							<Text>Ask our doctors anything</Text>
							<TextInput width={380} height={100} style={styles.askQuestion} multiline  placeholder="Add a Question" onChangeText ={(Qtext) => this.setState({Qtext})} />
						</View>		
					</View>
					
					<Button width={400} onPress={this.sendText}  title="Post" /> 
					<ActivityIndicator  animating = {this.state.animating2} color = 'red' size = "large"style={styles.activityIndicator}/>	
					<Text  style={{textAlign:'center'}} onPress={() => this.setState({modalVisible:false})}>Back to Question page</Text>
			</Modal>
			<Modal  visible={this.state.commentModalVisible}  animationType="slide">
				<Icon name="times-circle" size={35} onPress={() => this.setState({commentModalVisible:false})} style={{color:'red',marginLeft:10,marginTop:10,marginBottom:10}}/> 
				
				<View style={{backgroundColor:'whitesmoke',marginLeft:10,marginRight:10,flexDirection:'row',paddingTop:20,paddingBottom:20}}>
					
						<Text style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:15}}>{this.state.cMDetails[3]}</Text>
					<Text style={{fontSize:15,marginLeft:1}}>	{this.state.cMDetails[0]}</Text>
				</View>
				
				<ScrollView style={{marginBottom:75}}>
					{this.state.animating3 == true ?
						<ActivityIndicator  animating = {this.state.animating3} color = 'red' size = "large"style={styles.activityIndicator}/>
						:
						this.state.getC.filter(elt => elt.parentCommnetId == null).map((comment) =>
						<Showcomment c={comment} getC={this.state.getC} 
						cm={this.state.commentReplay} viewReplay = {() => {this.viewReplay(comment.commentId)}} 
						
						rereply ={(fullName,id) => {this.replay(fullName,id)}}
						
						replay={() => {this.replay(comment.fullName,comment.commentId)}} />)					
					}				
				</ScrollView>
				
				<View style={{minHeight:60,width:Dimensions.get('window').width,position: "absolute",bottom:4,flexDirection:'row'}}>
									<TextInput style={styles.input}  autoFocus={true} multiline value={this.state.comment} onChangeText={(comment) => this.setState({comment})}  placeholder="Add a comment ..."  />
									<View style={{position: "absolute",right:10,bottom:4,alignSelf: 'flex-end', }}>
										<Icon name="paper-plane" size={43} color="green"  onPress={ () => this.sendComment(this.state.cMDetails[1],this.state.Email,this.state.cMDetails[1])}/>
									</View>
				</View>
			</Modal>
			</>
			)
		}
	}
}
