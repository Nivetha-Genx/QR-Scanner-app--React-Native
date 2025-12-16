
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { StyleSheet } from 'react-native'

const Books = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
    {/* <Spacer /> */}
      <ThemedText title={true} style={styles.heading}>Your Reading List...</ThemedText>
      <ThemedText style={styles.subtitle}>Books you’ve saved to read later</ThemedText>
      <ThemedText style={styles.bookTitle}> 1.Atomic Habits - by James Clear</ThemedText>



      <ThemedText style={styles.bookTitle}> 2.Deep Work - by Cal Newport</ThemedText>

     <ThemedText style={styles.bookTitle}> 3.The Psychology of Money - by Morgan Housel</ThemedText>

     <Spacer />

    <ThemedText style={styles.footerText}>Add more books to grow your knowledge 🚀</ThemedText>

    </ThemedView>
  )
}

export default Books

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"stretch",
    },
    heading:{
        fontSize:'bold',
        fontSize:18,
        textAlign:"center",
        marginBottom:10,
    },
    subtitle: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 20,
    textAlign: 'center',
  },
 
  bookTitle: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 10,  
    marginLeft: 20,

  },
  author: {
    fontSize: 13,
    opacity: 0.6,
    marginTop: 4,
    marginLeft: 20,
  },
  footerText: {
    marginTop: 20,
    fontSize: 13,
    opacity: 0.6,
    textAlign: 'center',
  },
})