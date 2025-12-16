import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router';
import { StatusBar } from 'react-native-web';

export default function AuthLayout() {
    return(
        <>
        <StatusBar style="auto" />
        <Stack screenOptions={{headerShown:false , animation:"none"}} 
        />
        </>
    )
}