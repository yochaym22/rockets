import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {LaunchItem} from './launchItem';
import {AppProvider} from '../../providers/LaunchesProvider';
import {LaunchesContext} from '../../contexts/contexts';

function LaunchList() {
  // const [launchState, setLaunchState] = useState({
  //   error: null,
  //   isLoaded: false,
  //   items: [],
  // });
  //
  // useEffect(() => {
  //   fetch('https://lldev.thespacedevs.com/2.2.0/launch/?format=json')
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         setLaunchState({
  //           isLoaded: true,
  //           items: result.results,
  //         });
  //       },
  //       error => {
  //         setLaunchState({
  //           ...launchState,
  //           isLoaded: true,
  //           error,
  //         });
  //       },
  //     );
  // }, [launchState, launchState.error]);
  const {launches} = React.useContext(LaunchesContext);

  const renderLaunchItem = ({item}) => {
    return (
      <LaunchItem
        name={item.name}
        id={item.id}
        date={item.date}
        image={item.image}
        country={item.country}
        status={item.status}
        // navigation={navigation}
      />
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
        wikiUrl: i.pad.wiki_url || 'hardcoded url to wiki something',
        image: i.image || 'hardcoded default image url',
      };
    });

  // if (launchState.error) {
  //   return <Text>Error: {launchState.error.message}</Text>;
  // } else if (!launchState.isLoaded) {
  //   return <Text>Loading... :)</Text>;
  // } else {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <LaunchesContext.Consumer>
          {/*<FlatList*/}
          {/*  style={styles.list}*/}
          {/*  data={mapToLaunch(context => context.LaunchState.items)}*/}
          {/*  renderItem={renderLaunchItem}*/}
          {/*  keyExtractor={item => item.id}*/}
          {/*/>*/}
        </LaunchesContext.Consumer>
      </SafeAreaView>
    </AppProvider>
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
