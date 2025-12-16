
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { TextInput } from 'react-native'
import ThemedButton from '../../components/ThemedButton'
import { StyleSheet } from 'react-native'

const Create = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>Add a New Book</ThemedText>
      <Spacer height={10} />

      <ThemedText style={styles.subtitle}>
      Fill in the details below to add a book to your reading list
    </ThemedText>

    <Spacer height={20}/>

    <ThemedText style={styles.label}>Book Title</ThemedText>
    <TextInput style={{borderWidth: 0.5 ,borderColor: '#ccc', borderRadius: 6, padding: 10, alignSelf: 'flex-start',marginLeft: 30,}}
     placeholder="Enter book title...." />

    <Spacer />

    <ThemedText style={styles.label}>Author</ThemedText>
    <TextInput  style={{borderWidth: 0.5 ,borderColor: '#ccc', borderRadius: 6, padding: 10,alignSelf: 'flex-start',marginLeft: 30,}} 
     placeholder="Enter author name..." />

    <Spacer />

    <ThemedText style={styles.label}>Description</ThemedText>
    <TextInput
      placeholder="Short description about the book..."
      multiline
      numberOfLines={4}
      style={styles.textArea}
    />

    <Spacer />

    <ThemedButton>
      <ThemedText style={styles.buttonText}>
        Add Book
      </ThemedText>
    </ThemedButton>

    </ThemedView>
  )
}

export default Create

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    heading:{
        fontSize:'bold',
        fontSize:18,
        textAlign:"center",
    },
    subtitle: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
    borderWidth: 0.5 ,
    borderColor: '#ccc', 
    borderRadius: 6,
    padding: 10,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'start',
    fontWeight: '600',
  },
})
