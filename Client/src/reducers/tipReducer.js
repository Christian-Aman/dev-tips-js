import { GET_TIPS, ADD_TIP, DELETE_TIP } from '../actions/types';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TIPS:
      return [...payload];
    case ADD_TIP:
      return [...state, payload];
    case DELETE_TIP:
      return state.filter(tip => tip._id !== payload);
    default:
      return state;
  }
};
