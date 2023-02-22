import { createStore, combineReducers, applyMiddleware } from 'redux';


import {
  
  flightReducer,
 
} from './reducers';

const rootReducer = combineReducers({
  flight: flightReducer,
  
});

export default createStore(rootReducer);