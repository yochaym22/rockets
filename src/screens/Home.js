import {useWindowDimensions, Text} from 'react-native';
import React from 'react';
import {SceneMap, TabView} from 'react-native-tab-view';
import {LaunchList} from '../components/listView/launchList';

const LaunchesRoute = navigation => <LaunchList navigation={navigation} />;

const FavoritesRoute = navigation => <LaunchList navigation={navigation} />;

function Home({route, navigation}) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Launches'},
    {key: 'second', title: 'Favorites'},
  ]);

  const renderScene = SceneMap({
    first: () => LaunchesRoute(navigation),
    second: () => FavoritesRoute(navigation),
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
