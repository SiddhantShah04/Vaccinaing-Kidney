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
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// You can import from local files
// You can import from local files

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingLeft: 60,
    paddingRight: 60,
  },
  regForm: {
   
  },
  header: {
    fontSize: 24,

    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    height: 40,
    marginTop: 30,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  loginButton: {
    alignItems: 'center',
    padding: 20,
    width: 150,
    height: 70,
    marginLeft: 55,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  text: {
    marginTop: 30,
  },
  pickerStyle: {
    height: 50,
    width: '95%',
    color: 'black',
    borderColor: 'black',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
export default class SignUp extends React.Component {
  static navigationOptions = {
    headerTitle: 'Back to login page',
  };
  constructor(props) {
    super(props);
    this.state = { date: '0-0-0000' };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.regForm}>
          <Text style={styles.header}>Registration</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Full name"
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Email"
            underlineColorAndroid={'transparent'}
          />

          <View style={styles.text}>
            <Text>Date of birth</Text>

            <DatePicker
              style={{ width: 280, color: 'white' }}
              date={this.state.date} //initial date from state
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={date => {
                this.setState({ date: date });
              }}
            />
          </View>
          <TextInput
            style={styles.textinput}
            placeholder="Contact number"
            keyboardType="numeric"
            underlineColorAndroid={'transparent'}
          />

          <TextInput
            style={styles.textinput}
            placeholder="Password"
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Confirm password"
            underlineColorAndroid={'transparent'}
          />
          <View style={styles.text}>
            <Text>Sex</Text>
            <Picker
              style={styles.pickerStyle}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemPosition) =>
                this.setState({
                  language: itemValue,
                  choosenIndex: itemPosition,
                })
              }>
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={{ color: 'white', fontSize: 30 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
