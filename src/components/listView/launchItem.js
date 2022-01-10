import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_LAUNCHE, REMOVE_LAUNCH} from '../../actions/actionTypes';
import {findByIso3} from 'country-list-js';

function LaunchItem({
  name,
  id,
  date,
  image,
  country,
  status,
  wikiUrl,
  navigation,
  isFavorite,
}) {
  const favorites = useSelector(state => state.favorites.items);
  const dispatch = useDispatch();
  const item = {
    id: id,
    name: name,
    status: status,
    date: date,
    country: country,
    wikiUrl: wikiUrl,
    image: image,
  };

  const openWiki = () => {
    navigation.navigate('Browser', {
      name: name,
      wikiUrl: wikiUrl,
      isFavorite: favorites.some(i => i.id === id),
    });
  };
  const handleButtonClick = () => {
    isFavorite
      ? dispatch({type: REMOVE_LAUNCH, payload: item})
      : dispatch({type: ADD_LAUNCHE, payload: item});
  };
  const shouldBeDisabled = () =>
    !isFavorite && favorites.some(i => i.id === id);

  return (
    <TouchableOpacity key={id} onPress={() => openWiki()}>
      <View on style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.nameContainer}>{name}</Text>
          <Text style={styles.detailsContainer}>{status}</Text>
          <Text style={styles.detailsContainer}>
            {new Date(date).toDateString()}
          </Text>
          <Text style={styles.detailsContainer}>
            {findByIso3(country).name || country}
          </Text>
        </View>
        <View style={styles.imageBox}>
          <Button
            onPress={() => handleButtonClick()}
            disabled={shouldBeDisabled()}
            style={styles.favoriteButton}
            title={isFavorite ? 'Remove' : 'Favorite'}
            titleStyle={{
              fontSize: 2,
            }}
          />
          <Image style={styles.imageContent} source={{uri: image}} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
    height: 180,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  imageBox: {
    flex: 0.4,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  infoContainer: {
    backgroundColor: '#b4c2be',
    flex: 0.6,
    margin: 5,
  },
  nameContainer: {
    backgroundColor: 'aliceblue',
    flex: 0.5,
  },
  detailsContainer: {
    backgroundColor: 'aliceblue',
    flex: 0.5,
    flexDirection: 'column',
  },
  favoriteButton: {
    height: '20%',
    width: '100%',
  },
  imageContent: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
});

module.exports = {LaunchItem};
