import React from 'react';
import WebView from 'react-native-webview';

function Browser({routh, navigation}) {
  const {name, wikiUrl} = navigation.params;
  console.log(wikiUrl, name);

  return <WebView source={{uri: wikiUrl}} />;
}
module.exports = {Browser};
