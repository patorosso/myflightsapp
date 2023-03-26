import { createSlice } from "@reduxjs/toolkit";
import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../../constants/firebase";

const initialState = {
    token: null,
    userId: null,
    email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
        state.token = action.payload,
        state.userId = action.payload,
        state.email = action.payload
    },
    signUp: (state, action) => {
        state.token = action.payload.token,
        state.userId = action.payload.userId,
        state.email = action.payload.email
    },
  },
});

export const { signIn, signUp } = authSlice.actions;

export const signInFirebase = (email, password) => {
  return async (dispatch) => {
    try {
        const response = await fetch(URL_AUTH_SIGN_IN, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        });
  
        const data = await response.json();
        dispatch(signIn({token: data.idToken,userId: data.localId, email: data.email}));
      } catch (error) {
        throw error;
      }
  };
};

export const signUpFirebase = (email, password) => {
    return async (dispatch) => {
      try {
        const response = await fetch(URL_AUTH_SIGN_UP, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
            
          }),
        });
  
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const data = await response.json();
        dispatch(signUp({token: data.idToken,userId: data.localId, email: data.email}));
      } catch (error) {
        throw error;
      }
    };
  };