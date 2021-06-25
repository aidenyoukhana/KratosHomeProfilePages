import 'react-native-gesture-handler';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// }

export default class Profile extends Component {

  render() {
    return (
      <NavigationContainer>{
      <ScrollView> 
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260.jpg'}}/>
          <View style={styles.body}>

          <View style={styles.bodyContent}>
              <Text style={styles.name}>Sarah Jones</Text>
            </View>




            <View style={styles.bodyContent}>
            

              <Text style={styles. favoriteexercise}>FAVORITE EXERCISE</Text>
              {/* <Text>TEXT GOES HERE</Text> */}
              
              <Text style={styles.interests}>INTERESTS</Text>
              {/* <Text>TEXT GOES HERE</Text> */}

              <Text style={styles.programs}>PROGRAMS</Text>
              {/* <Text>TEXT GOES HERE</Text> */}
            </View>



        </View>
      </View>
      </ScrollView>
      }</NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "white",
    height:150,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 74,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:70
  },
  favoriteexercise:{
    fontSize:18,
    color: "black",
    fontWeight: "600",
    marginTop: -1,
    marginRight: 'auto'

  },
  interests:{
    fontSize:18,
    color: "black",
    fontWeight: "600",
    marginTop: 110,
    marginRight: 'auto'
  },
  programs: {
    fontSize:18,
    color: "black",
    fontWeight: "600",
    marginTop: 120,
    marginRight: 'auto'
  },
  body:{
    marginTop:1,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30
  },
  name:{
    fontSize:28,
    color: "black",
    fontWeight: "600",
    marginTop: 50
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});