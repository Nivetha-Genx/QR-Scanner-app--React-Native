import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import{useRouter} from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';

export default function Result() {
  const { qrData } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>QR Scan Result</ThemedText>
      <Spacer height={20} />
      <ThemedText>Scanned Data:</ThemedText>
      <Spacer height={10} />
      <Text style={styles.qrText}>{qrData}</Text>
      <Spacer height={30} />
      <Button title="Scan Again" onPress={() => router.push('/Scanner/scanner')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  qrText: { fontSize: 18, color: 'blue', textAlign: 'center' },
});
