import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';

export default function QrScannerWidget() {
  return (
    <FlexWidget
      clickAction="OPEN_APP"
      style={{
        width: 'match_parent',
        height: 'match_parent',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E3A8A', 
        padding: 12,
      }}
    > 
      <TextWidget
        text="📷"
        style={{
          fontSize: 26,
          marginBottom: 6,
        }}
      />

      <TextWidget
        text="QR Scanner"
        style={{
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 2,
        }}
      />

      <TextWidget
        text="Tap to scan"
        style={{
          color: '#E0F2F1',
          fontSize: 12,
        }}
      />
    </FlexWidget>
  );
}
