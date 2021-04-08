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
import {ADD_LAUNCHE} from '../../actions/actionTypes';

function LaunchItem({
  name,
  id,
  date,
  image,
  country,
  status,
  wikiUrl,
  navigation,
}) {
  const favoritesItems = useSelector(state => state.favorites.items);
  const dispatch = useDispatch;
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
    });
  };
  const addToFavorites = () => {
    dispatch({type: ADD_LAUNCHE, payload: item});
  };
  return (
    <TouchableOpacity key={id} onPress={() => openWiki()}>
      <View on style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.nameContainer}>{name}</Text>
          <Text style={styles.detailsContainer}>{status}</Text>
        </View>
        <View style={styles.imageBox}>
          <Button
            onPress={() => addToFavorites()}
            style={styles.favoriteButton}
            title={'favorite'}
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
