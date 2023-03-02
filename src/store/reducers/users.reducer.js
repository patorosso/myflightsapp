import { usersTypes } from "../types";

const { CREATE_USER, DELETE_USER, UPDATE_USER } = usersTypes;

const initialState = {
    users: [],

};

const userReducer = ( state = initialState, action) => {
    return state;
};

export default userReducer;