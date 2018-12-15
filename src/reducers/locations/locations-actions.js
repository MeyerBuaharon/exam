import * as actionTypes from './action-type';

export const fetch = () => {
  return {
    type: actionTypes.FETCH_LOCATIONS
  };
};
export const add = item => {
  return {
    type: actionTypes.ADD_LOCATION,
    payload: item
  };
};
export const remove = item => {
  return {
    type: actionTypes.REMOVE_LOCATION,
    payload: item
  };
};

export const update = item => {
  return {
    type: actionTypes.UPDATE_LOCATION,
    payload: item
  };
};
export const sort = item => {
  return { type: actionTypes.ALPHABETIC_SORT };
};
