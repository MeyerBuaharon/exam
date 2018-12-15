import * as actionTypes from './action-type';
import { genId } from '../utility';
const initialState = {
  Locations: []
};
const setLocal = locations => {
  localStorage.setItem('location', JSON.stringify(locations));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOCATIONS: {
      const Locations = JSON.parse(localStorage.getItem('location'));
      if (!Locations) return state;
      return { ...state, Locations };
    }

    case actionTypes.REMOVE_LOCATION: {
      const newerLocation = [...state.Locations];
      const toRemoveLocation = newerLocation.find(
        x => x._id === action.payload._id
      );
      newerLocation.splice(newerLocation.indexOf(toRemoveLocation), 1);
      setLocal(newerLocation);
      return { ...state, Locations: newerLocation };
    }
    case actionTypes.ADD_LOCATION: {
      const newLocation = { ...action.payload, _id: genId() };
      const newerLocations = [...state.Locations, newLocation];
      setLocal(newerLocations);
      return { ...state, Locations: [...state.Locations, newLocation] };
    }

    case actionTypes.UPDATE_LOCATION: {
      const newerLocations = [...state.Locations];
      const toRemoveLocations = newerLocations.findIndex(
        x => x._id === action.payload._id
      );
      newerLocations.splice(toRemoveLocations, 1, action.payload);
      setLocal(newerLocations);
      return { ...state, Locations: newerLocations };
    }
    case actionTypes.ALPHABETIC_SORT: {
      const newerLocations = [...state.Locations];
      newerLocations.sort(function(a, b) {
        if (a.Name < b.Name) return -1;
        if (a.Name > b.Name) return 1;
        return 0;
      });
      return { ...state, Locations: newerLocations };
    }

    default:
      return state;
  }
};

export default reducer;
