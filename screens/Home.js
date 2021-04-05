import {useWindowDimensions, Text} from 'react-native';
import React from 'react';
import {SceneMap, TabView} from 'react-native-tab-view';
import {LaunchList} from '../components/listView/launchList';

const FirstRoute = navigation => <LaunchList navigation={navigation} />;

const SecondRoute = navigation => <LaunchList navigation={navigation} />;

function Home({navigation}) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: () => FirstRoute(navigation),
    second: () => SecondRoute(navigation),
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
module.exports = {Home};
