import {ADD_SERVER, ADD_URI, SET_DATA, SET_REQUEST} from "./types";

export let initialState = {
    server: '',
    uri: '',
    request: '',
    data: null,
}

export function reducer(state, action) {
    switch(action.type) {

        case ADD_SERVER:
            const newState = {
              ...state,
              server: action.payload,
            }
            initialState = newState;
            return newState;

        case ADD_URI:
            const newState2 = {
                ...state,
                uri: action.payload,
            }
            initialState = newState2;
            return newState2;

        case SET_REQUEST:
            const newState3 = {
                ...state,
                request: action.payload,
            }
            initialState = newState3;
            return newState3;

        case SET_DATA:
            const newState4 = {
                ...state,
                data: action.payload,
            }
            initialState = newState4;
            return newState4;

        default:
            return state;
    }
}
