import { configureStore } from "@reduxjs/toolkit";

import flightReducer from "./flight.slice";
import authReducer from "./reducers/auth.reducer";

export const store = configureStore({
  reducer: {
    flight: flightReducer,
    //auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});