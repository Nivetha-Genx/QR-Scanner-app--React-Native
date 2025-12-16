import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/colors'
import ThemedButton from '../../components/ThemedButton'
import { router } from 'expo-router';

const Login = () => {
    const handleSubmit = () => {
        console.log("login pressed")
         router.replace('/');
    }
  return (
    <ThemedView style={styles.container}>

        <Spacer />
        
        <ThemedText title={true} style={styles.title}>Login to your Account</ThemedText>
        
        <ThemedButton onPress={handleSubmit}> 
            <Text style={{color:'#f2f2f2'}}>Login</Text>
        </ThemedButton>
      
        <Spacer height={100} />
        <Link href="/register">
        <ThemedText style={{textAlign :"center"}}>Register instead</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  title:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:18,
    marginBottom:30
  }

})