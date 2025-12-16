import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { router } from 'expo-router';

const Register = () => {
       const handleSubmit = () => {
        console.log("register pressed")
        router.replace('/login');
    }
  return (
    <ThemedView style={styles.container}>

        <Spacer />
        
        <ThemedText title={true} style={styles.title}>Register for an Account</ThemedText>
         <ThemedButton onPress={handleSubmit}> 
            <Text style={{color:'#f2f2f2'}}>Register</Text>
        </ThemedButton>
        <Spacer height={100} />
        <Link href="/register">
        <ThemedText style={{textAlign :"center"}}>Login instead</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Register

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
