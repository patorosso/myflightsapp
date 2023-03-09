import { flightsTypes } from '../types';

const { SELECT_FLIGHT } = flightsTypes;

const initialState = {
  flightId: null,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FLIGHT: {
      return {
        ...state,
        flightId: action.flightId
      };
    }
    
    default:
      return state;
  }
};

export default flightReducer;