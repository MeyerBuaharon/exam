import * as actionTypes from "./action-type";

export const fetch = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES
  };
};
export const add = item => {
  return {
    type: actionTypes.ADD_CATEGORY,
    payload: item
  };
};
export const remove = item => {
  return {
    type: actionTypes.REMOVE_CATEGORY,
    payload: item
  };
};

export const update = item => {
  return {
    type: actionTypes.UPDATE_CATEGORY,
    payload: item
  };
};
