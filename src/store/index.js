import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  
  flightReducer,
  userReducer,
  authReducer,
 
} from './reducers';

const rootReducer = combineReducers({
  flight: flightReducer,
  user: userReducer,
  auth: authReducer,
  
});

export default createStore(rootReducer, applyMiddleware(thunk));