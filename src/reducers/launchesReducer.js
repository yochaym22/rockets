import * as actions from '../actions/actionTypes';
import React from 'react';

export const launchesReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_LAUNCHES:
      return {
        ...state,
        launches: action.value,
      };
    case actions.SET_ERROR:
      return {
        ...state,
        error: action.value,
      };
    case actions.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.value,
      };
    case actions.SET_NAVIGATION:
      return {
        ...state,
        navigation: action.value,
      };

    default:
      return state;
  }
};

module.exports = {launchesReducer};
