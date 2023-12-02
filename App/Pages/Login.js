import { View, Text , Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { TouchableOpacity } from 'react-native';


export default function Login() {
  WebBrowser.maybeCompleteAuthSession();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '173169675705-r3l7kfbbt7fp7qao6c066iv0sffdgaqs.apps.googleusercontent.com',
    expoClientId:'173169675705-4mvtuhsptou4i18vc7bj1q2lornfubsa.apps.googleusercontent.com'
  });

  return (
    <View>
        <Image source={require('./../Assets/Images/login.png')} />
        <View style={styles.container}>
             <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
            <Text style={{textAlign:'center',
        marginTop:80,fontSize:20}}>Login/Signup</Text>
            <TouchableOpacity style={styles.button} 
            onPress={()=>promptAsync()}>
            <Ionicons name="logo-google" size={24}
             color="white" style={{marginRight:10}} />
                <Text style={{color:Colors.white}}>Sign In with Google</Text>        
            </TouchableOpacity>
        </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    marginTop:-25,
    backgroundColor:'#fff',
    borderTopRightRadius:30,
    borderTopLeftRadius:30
},
welcomeText:{
    fontSize:35,
    textAlign:'center',
    fontWeight:'bold' 
},
button:{
    backgroundColor:Colors.primary,
    padding:10,
    margin:30,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
}

})