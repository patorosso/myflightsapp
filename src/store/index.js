import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  
  flightReducer,
  
  authReducer,
 
} from './reducers';

const rootReducer = combineReducers({
  flight: flightReducer,
  auth: authReducer,
  
});

export default createStore(rootReducer, applyMiddleware(thunk));