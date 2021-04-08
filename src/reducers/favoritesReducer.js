import * as actions from '../actions/actionTypes';

const initialState = {
  items: [],
};
export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_LAUNCHE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case actions.REMOVE_LAUNCH:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
};
