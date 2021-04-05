import * as actions from '../actions/actionTypes';

const initialState = {
  items: [],
};
export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LAUNCHES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
