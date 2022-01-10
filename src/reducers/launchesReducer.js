import * as actions from '../actions/actionTypes';
import React from 'react';

const initialState = {
  items: [],
  next: '',
  isLoading: false,
};
export const launchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LAUNCHES_SUCCESS: {
      return {
        items: [...state.items, ...action.payload.results],
        next: action.payload.next,
        isLoading: action.isLoading,
      };
    }
    case actions.SET_IS_LOADED:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

module.exports = {launchesReducer};
