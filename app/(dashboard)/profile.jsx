
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { TextInput } from 'react-native'
import ThemedButton from '../../components/ThemedButton'
import { StyleSheet } from 'react-native'

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>Your Email</ThemedText>
      <Spacer />
      {/* <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer /> */}
       <ThemedText style={styles.subtitle}>
      Enter your email address to receive reading updates and reminders
    </ThemedText>

    <Spacer />

    {/* Email input */}
    <ThemedText style={styles.label}>Email Address</ThemedText>
    <TextInput
      placeholder="example@email.com"
      keyboardType="email-address"
      autoCapitalize="none"
      style={styles.input}
    />

    <Spacer />

    {/* Action button */}
    <ThemedButton>
      <ThemedText style={styles.buttonText}>
        Continue
      </ThemedText>
    </ThemedButton>

    <Spacer />

    {/* Footer note */}
    <ThemedText style={styles.footerText}>
      We’ll never share your email with anyone.
    </ThemedText>
    </ThemedView>
  )
}

export default Profile

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
    textAlign: 'center',
  },
  label: {
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  footerText: {
    fontSize: 12,
    opacity: 0.6,
    textAlign: 'center',
  },
})