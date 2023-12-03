import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'
import Slider from '../Components/Slider'
import { ScrollView } from 'react-native'



export default function Home() {
   
  return (
    <ScrollView style={{padding:20}}>
       
        <SearchBar/>
        <Slider/>
        <View style={{height:100}}> 
          
        </View>
    </ScrollView> 
  )
}
