import { GET_TAGS } from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TAGS:
      return { ...payload };
    default:
      return state;
  }
};
