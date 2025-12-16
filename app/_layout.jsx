import { StyleSheet, Text, useColorScheme,  } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native-web'
import { Colors } from '../constants/colors'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    // console.log(colorScheme) 
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
       <StatusBar  style={{backgroundColor:theme.uiBackground}} />
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.navbackground },
            headerTintColor:theme.title,
        }}> 
            
            <Stack.Screen name="(auth)" options={{  title:"AUTH"}} />   
            <Stack.Screen name="index" options={{title:"Home"}} /> 
            <Stack.Screen name="(dashboard)" options={{ title:"Dashboard"}} />    
            
        </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})