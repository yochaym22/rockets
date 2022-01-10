import {useWindowDimensions, Text} from 'react-native';
import React from 'react';
import {SceneMap, TabView} from 'react-native-tab-view';
import {LaunchList} from '../components/listView/launchList';
import {useSelector} from 'react-redux';

const LaunchesRoute = (navigation, items, isLoading, nextUrl) => (
  <LaunchList
    navigation={navigation}
    items={items}
    nextUrl={nextUrl}
    isLoading={isLoading}
  />
);

const FavoritesRoute = (navigation, items, isLoading) => (
  <LaunchList navigation={navigation} items={items} isLoading={isLoading} />
);

function Home({route, navigation}) {
  const launchesItems = useSelector(state => state.launches.items);
  const favoritesItems = useSelector(state => state.favorites.items);
  const nextUrl = useSelector(state => state.launches.next);
  const isLaunchesLoading = useSelector(state => state.launches.isLoading);
  const isFavoritesLoading = useSelector(state => state.favorites.isLoading);

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Launches'},
    {key: 'second', title: 'Favorites'},
  ]);

  const renderScene = SceneMap({
    first: () =>
      LaunchesRoute(navigation, launchesItems, isLaunchesLoading, nextUrl),
    second: () =>
      FavoritesRoute(navigation, favoritesItems, isFavoritesLoading),
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
