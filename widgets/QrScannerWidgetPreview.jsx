import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WidgetPreview } from 'react-native-android-widget';
import QrScannerWidget from './QrScannerWidget';

export default function QrScannerWidgetPreview() {
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <QrScannerWidget />}
        width={320}
        height={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
