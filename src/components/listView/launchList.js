import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  ActivityIndicator,
} from 'react-native';
import {LaunchItem} from './launchItem';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../loader/loader';
import {GET_MORE_LAUNCHES} from '../../actions/actionTypes';

function LaunchList({navigation}) {
  const wikiRocketUrl = 'https://en.wikipedia.org/wiki/Rocket';
  const imagePlaceHolder = 'https://via.placeholder.com/150';

  const dispatch = useDispatch();
  const launchesItems = useSelector(state => state.launches.items);
  const favoritesItems = useSelector(state => state.favorites.items);
  const nextUrl = useSelector(state => state.launches.next);
  const isLoading = useSelector(state => state.launches.isLoading);
  console.log(navigation);

  const renderLaunchItem = ({item}) => (
    <LaunchItem
      name={item.name}
      id={item.id}
      date={item.date}
      image={item.image}
      country={item.country}
      status={item.status}
      wikiUrl={item.wikiUrl}
      navigation={navigation}
    />
  );
  const handleLoadMoreLaunches = () => {
    dispatch({type: GET_MORE_LAUNCHES, nextLaunchesUrl: nextUrl});
  };
  const footer = () => {
    return (
      <View style={styles.footer}>
        {isLoading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };
  const mapToLaunch = items =>
    items.map(i => {
      return {
        id: i.id,
        name: i.name,
        status: i.status.name,
        date: i.window_start,
        country: i.pad.location.country_code,
        wikiUrl: i.pad.wiki_url || wikiRocketUrl,
        image: i.image || imagePlaceHolder,
      };
    });
  return (
    <SafeAreaView style={styles.container}>
      {launchesItems.length ? (
        <FlatList
          style={styles.list}
          data={mapToLaunch(launchesItems)}
          renderItem={renderLaunchItem}
          keyExtractor={item => item.id}
          ListFooterComponent={footer}
          onEndReached={handleLoadMoreLaunches}
          onEndThreshold={0}
        />
      ) : (
        //TODO loading indicator
        <Loader />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    padding: 10,
    backgroundColor: 'skyblue',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
module.exports = {LaunchList};
