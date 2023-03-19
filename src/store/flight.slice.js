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
        action.payload.coords
      );
      state.flights.push(newFlight);
    },
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
  },
});

export const { addFlight, setFlights } = flightSlice.actions;

export const saveFlight = (coords) => {
  
  return async (dispatch) => {
    try {
      
      
      const result = await insertFlight(coords);
      console.warn("result", result);
      dispatch(addFlight({ id: result.insertId, coords }));
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