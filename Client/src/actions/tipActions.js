import { GET_TIPS, ADD_TIP, DELETE_TIP } from './types';
import axios from 'axios';

export const getTips = () => async dispatch => {
  const { data } = await axios('/tips');
  dispatch({
    type: GET_TIPS,
    payload: data,
  });
};

export const deleteTip = id => dispatch => {
  axios.delete(`/tips/${id}`).catch(function(error) {
    console.log(error);
  });
  dispatch({
    type: DELETE_TIP,
    payload: id,
  });
};

export const addTip = tip => dispatch => {
  axios.post('/tips', tip).catch(function(error) {
    console.log(error);
  });
  dispatch({
    type: ADD_TIP,
    payload: tip,
  });
};
