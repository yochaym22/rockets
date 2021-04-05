import {combineReducers} from 'redux';
import {launchesReducer} from '../reducers/launchesReducer';
import {favoriteReducer} from '../reducers/favoritesReducer';

export const rootReducer = combineReducers({
  launches: launchesReducer,
  favorites: favoriteReducer,
});
