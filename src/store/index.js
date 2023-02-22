import { createStore, combineReducers, applyMiddleware } from 'redux';


import {
  
  flightReducer,
 
} from './reducers';

const rootReducer = combineReducers({
  flights: flightReducer,
  
});

export default createStore(rootReducer);