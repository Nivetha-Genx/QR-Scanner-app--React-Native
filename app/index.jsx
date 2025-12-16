import { StyleSheet, Text, View, Image,Button } from 'react-native'
import React from 'react'
import Butterfly from '../assets/img/Butterfly.gif'
import { Link } from 'expo-router'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import ThemedButton from '../components/ThemedButton'
import Spacer from '../components/Spacer'
import { useRouter } from 'expo-router'

const Home = () => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <Image source={Butterfly} style={styles.img} />

      <ThemedText style={styles.title} title={true}>React Native</ThemedText>

      <Spacer height ={20} />

      <ThemedView style={styles.card}>
        <ThemedText>Hello, Welcome to React Native</ThemedText>
      </ThemedView>

      
      <Spacer height ={30} />

      <ThemedButton
         onPress={() => router.push('/Scanner/scanner')}>
        <ThemedText style={styles.buttonText}>Open QR Scanner</ThemedText>
        </ThemedButton>

      {/* <Link href="/Scanner/scanner" style={styles.link}>
      <ThemedText>Scan QR Code</ThemedText>
      </Link> */}

      <Link href="/login" style={styles.link}>
      <ThemedText>Login Page</ThemedText></Link>
    
      <Link href="/register" style={styles.link}>
      <ThemedText>Register Page</ThemedText></Link>

      
      <Link href="/profile" style={styles.link}>
      <ThemedText>Profile Page</ThemedText></Link>
    
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  title:{
    fontWeight:"bold",
    fontSize:22
  },
  card:{
    backgroundColor:"#eee",
    padding:20,
    borderRadius:5,
    boxShadow:'4px 4px rgba(0,0,0,0.1)'
  },
  img:{
    marginVertical:20
  },
   link:{
    marginVertical:10,
    borderBottomWidth:1
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})