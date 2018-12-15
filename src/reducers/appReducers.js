import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import locationReducer from './locations/locations-reducer';
import categoryReducer from './categories/categories-reducer';
export default combineReducers({
  form,
  locationReducer,
  categoryReducer
});
