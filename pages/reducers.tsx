import { combineReducers } from 'redux';
import searchResultsReducer from './searchResultsSlice';

const rootReducer = combineReducers({
  results: searchResultsReducer,
});

export default rootReducer;
