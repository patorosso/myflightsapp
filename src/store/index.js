import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  
  flightReducer,
  userReducer,
 
} from './reducers';

const rootReducer = combineReducers({
  flight: flightReducer,
  user: userReducer,
  
});

export default createStore(rootReducer, applyMiddleware(thunk));