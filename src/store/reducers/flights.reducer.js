import { FLIGHTS} from '../../constants/data/index';
import { flightsTypes } from '../types';

const { SELECT_FLIGHT } = flightsTypes;

const initialState = {
  flights: FLIGHTS,
  selected: null,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FLIGHT: {
      return {
        ...state,
        selected: state.flights.find((flight) => flight.id === action.flightId),
      };
    }
    
    default:
      return state;
  }
};

export default flightReducer;