import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {LaunchItem} from './launchItem';
import {useDispatch} from 'react-redux';
import Loader from '../../loader/loader';
import {GET_MORE_LAUNCHES} from '../../actions/actionTypes';

function LaunchList({navigation, items, nextUrl, isLoading}) {
  const [text, setText] = React.useState('');
  const [launchesItems, setLaunchesItems] = React.useState(items);
  const wikiRocketUrl = 'https://en.wikipedia.org/wiki/Rocket';
  const imagePlaceHolder = 'https://via.placeholder.com/150';

  const dispatch = useDispatch();
  const isFavorite = nextUrl ? false : true;

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
      isFavorite={isFavorite}
    />
  );
  const handleLoadMoreLaunches = () => {
    if (nextUrl && items === launchesItems) {
      dispatch({type: GET_MORE_LAUNCHES, nextLaunchesUrl: nextUrl});
    }
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
  const handleTextChange = value => {
    setText(value);
    if (value.length >= 3) {
      setLaunchesItems(
        items.filter(i => i.name.toLowerCase().includes(value.toLowerCase())),
      );
    } else {
      setLaunchesItems(items);
    }
  };

  const mapToLaunch = items => {
    return isFavorite
      ? items
      : items.map(i => {
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
  };
  return (
    <SafeAreaView style={styles.container}>
      {items.length ? (
        <View>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            style={styles.input}
            onChangeText={s => handleTextChange(s)}
            value={text}
            placeholder={'search launch...'}
          />
          <FlatList
            style={styles.list}
            data={mapToLaunch(launchesItems)}
            renderItem={renderLaunchItem}
            keyExtractor={item => item.id}
            ListFooterComponent={footer}
            onEndReached={handleLoadMoreLaunches}
            onEndThreshold={0}
          />
        </View>
      ) : !isLoading ? (
        <View style={styles.list}>
          <Text>Favorites list is empty</Text>
        </View>
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
    backgroundColor: 'skyblue',
    padding: 12,
  },
  list: {
    padding: 10,
    backgroundColor: 'skyblue',
  },
  footer: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
module.exports = {LaunchList};
