import {
  GET_LAUNCHES,
  GET_LAUNCHES_SUCCESS,
  GET_LAUNCHES_FAILED,
  GET_MORE_LAUNCHES,
  GET_NEXT_LAUNCHES_SUCCESS,
  SET_IS_LOADED,
} from '../actions/actionTypes';
import React from 'react';

export const callApi = ({dispatch}) => {
  return next => action => {
    if (action.type === GET_LAUNCHES) {
      dispatch({
        type: SET_IS_LOADED,
        payload: true,
      });
      return fetch(action.apiUrl)
        .then(res => res.json())
        .then(
          result => {
            dispatch({
              type: GET_LAUNCHES_SUCCESS,
              payload: result,
              isLoading: false,
            });
            console.log(result.isLoading);
            return result;
          },
          error => {
            dispatch({
              type: GET_LAUNCHES_FAILED,
              payload: error,
              isLoading: false,
            });
            return Promise.reject();
          },
        );
    } else if (action.type == GET_MORE_LAUNCHES) {
      dispatch({
        type: SET_IS_LOADED,
        payload: true,
      });
      return fetch(action.nextLaunchesUrl)
        .then(res => res.json())
        .then(
          result => {
            dispatch({
              type: GET_LAUNCHES_SUCCESS,
              payload: result,
              isLoading: false,
            });
            return result;
          },
          error => {
            dispatch({
              type: GET_LAUNCHES_FAILED,
              payload: error,
              isLoading: false,
            });
            return Promise.reject();
          },
        );
    } else {
      return next(action);
    }
  };
};
