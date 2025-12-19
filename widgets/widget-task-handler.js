import React from 'react';
import QrScannerWidget from './QrScannerWidget';

export async function widgetTaskHandler(props) {
  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
    case 'WIDGET_UPDATE':
      props.renderWidget(<QrScannerWidget />);
      break;

    default:
      break;
  }
}
