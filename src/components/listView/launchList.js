import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {LaunchItem} from './launchItem';
import {useSelector} from 'react-redux';

function LaunchList({navigation}) {
  const launchesItems = useSelector(state => state.launches.items);
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
  const mapToLaunch = items =>
    items.map(i => {
      return {
        id: i.id,
        name: i.name,
        status: i.status.name,
        date: i.window_start,
        country: i.pad.location.country_code,
        wikiUrl: i.pad.wiki_url || 'hardcoded url to wiki something',
        image: i.image || 'hardcoded default image url',
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
        />
      ) : (
        //TODO loading indicator
        <Text>{launchesItems.length}</Text>
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
});
module.exports = {LaunchList};
