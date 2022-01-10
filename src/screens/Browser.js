import React from 'react';
import WebView from 'react-native-webview';

function Browser({route}) {
  const {wikiUrl} = route.params;
  return <WebView source={{uri: wikiUrl}} />;
}
module.exports = {Browser};
