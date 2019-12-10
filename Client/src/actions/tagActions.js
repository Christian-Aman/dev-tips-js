import { GET_TAGS } from './types';
import axios from 'axios';

export const getTags = () => async dispatch => {
  const { data } = await axios('/tags');
  const tags = data.reduce((acc, tag) => {
    return { ...acc, [tag._id]: tag.title };
  }, {});
  dispatch({
    type: GET_TAGS,
    payload: tags,
  });
};
