import {
  GET_LAUNCHES,
  GET_LAUNCHES_SUCCESS,
  GET_LAUNCHES_FAILED,
} from '../actions/actionTypes';

export const callApi = ({dispatch}) => {
  return next => action => {
    if (action.type === GET_LAUNCHES) {
      return fetch('https://lldev.thespacedevs.com/2.2.0/launch/?format=json')
        .then(res => res.json())
        .then(
          result => {
            dispatch({
              type: GET_LAUNCHES_SUCCESS,
              payload: result,
            });
            return result;
          },
          error => {
            dispatch({
              type: GET_LAUNCHES_FAILED,
              payload: error,
            });
            return Promise.reject();
          },
        );
    } else {
      return next(action);
    }
  };
};
