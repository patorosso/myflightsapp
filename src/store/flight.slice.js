import { createSlice } from "@reduxjs/toolkit";

import { getFlights, insertFlight } from "../db";
import Flight from "../models/flights";

const initialState = {
  flights: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    addFlight: (state, action) => {
      const newFlight = new Flight(
        action.payload.id.toString(),
        action.payload.flight_iata,
        action.payload.dep_iata,
        action.payload.arr_iata,
        action.payload.time,
      );
      state.flights.push(newFlight);
    },
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
  },
});

export const { addFlight, setFlights } = flightSlice.actions;

export const saveFlight = (flight_iata, dep_iata, arr_iata, time) => {
  
  return async (dispatch) => {
    try {
      
      
      const result = await insertFlight(flight_iata, dep_iata, arr_iata, time);
      
      dispatch(addFlight({ id: result.insertId, flight_iata, dep_iata, arr_iata, time}));
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadFlights = () => {
  return async (dispatch) => {
    try {
      const result = await getFlights();
      dispatch(setFlights(result?.rows?._array));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export default flightSlice.reducer;