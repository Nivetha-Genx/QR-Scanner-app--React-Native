import { View, useColorScheme,styleSheet} from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ThemedCard = ( { style,...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View
      style={[{backgroundColor:theme.uiBackground, borderRadius:8}, style.card,
        style]}
        {...props}
         />

  )
}

export default ThemedCard

