import { StyleSheet, View,Image, Dimensions } from 'react-native'
import React from 'react'

const Splash = () => {
  const {height,width}=Dimensions.get('window')
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}>
     <Image style={{height:height*0.27,width:width*0.4}} source={require('../assets/images/cloudRain.png')}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})