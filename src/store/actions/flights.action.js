import { flightsTypes } from '../types';

const { SELECT_FLIGHT } = flightsTypes;

export const selectFlight = (id) => ({
  type: SELECT_FLIGHT,
  flightId: id,
});

