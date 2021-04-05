import React from 'react';
import WebView from 'react-native-webview';

function Browser({route, navigation}) {
  const {name, wikiUrl} = route.params;
  console.log(wikiUrl, name);

  return <WebView source={{uri: wikiUrl}} />;
}
module.exports = {Browser};
