import * as actions from '../actions/actionTypes';

const initialState = {
  items: [],
  isLoading: false,
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
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
