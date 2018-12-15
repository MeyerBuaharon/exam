
import * as actionTypes from './action-type';
import { genId } from '../utility';


const initialState = {
    Categories: []
  };

const setLocal = categories => {
    localStorage.setItem('categories', JSON.stringify(categories));
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_CATEGORIES: {
        const Categories = JSON.parse(localStorage.getItem('categories'));
        if (!Categories) return state;
        return { ...state, Categories };
      }
  
      case actionTypes.REMOVE_CATEGORY: {
        const newerCategories = [...state.Categories];
        const toRemoveCategory = newerCategories.find(
          x => x._id === action.payload._id
        );
        newerCategories.splice(newerCategories.indexOf(toRemoveCategory), 1);
        setLocal(newerCategories);
        return { ...state, Categories: newerCategories };
      }
  
      case actionTypes.ADD_CATEGORY: {
        const newCategory = { ...action.payload, _id: genId() };
        const newerCategories = [...state.Categories, newCategory];
        setLocal(newerCategories);
        return { ...state, Categories: newerCategories };
      }
  
      case actionTypes.UPDATE_CATEGORY: {
        const newerCategories = [...state.Categories];
        const toRemoveCategory = newerCategories.findIndex(
          x => x._id === action.payload._id
        );
        newerCategories.splice(toRemoveCategory, 1, action.payload);
        setLocal(newerCategories);
        return { ...state, Categories: newerCategories };
      }
  
      default:
        return state;
    }
  };
  export default reducer;
  

