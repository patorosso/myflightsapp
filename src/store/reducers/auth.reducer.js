import { authTypes } from '../types';

const { SIGN_UP, SIGN_IN } = authTypes;

const initialState = {
  token: null,
  userId: null,
  email: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        email: action.email,
      };
    case SIGN_IN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        email: action.email,
      };
    default:
      return state;
  }
};

export default authReducer;
