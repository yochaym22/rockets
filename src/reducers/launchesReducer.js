import * as actions from '../actions/actionTypes';
import React from 'react';

const initialState = {
  items: [],
  next: '',
};
export const launchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LAUNCHES_SUCCESS: {
      return {
        ...state,
        items: [...state.items, ...action.payload.results],
        next: action.payload.next,
      };
    }

    // case actions.SET_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    // case actions.SET_IS_LOADED:
    //   return {
    //     ...state,
    //     isLoaded: action.payload,
    //   };
    // case actions.SET_NAVIGATION:
    //   return {
    //     ...state,
    //     navigation: action.payload,
    //   };

    default:
      return state;
  }
};

module.exports = {launchesReducer};
