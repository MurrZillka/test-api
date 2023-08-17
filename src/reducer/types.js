export const ADD_SERVER = "ADD_SERVER";
export const ADD_URI = "ADD_URI";
export const SET_REQUEST = "SET_REQUEST";
export const SET_DATA = "SET_DATA";

export function addServer(servName) {
    return ({
        type: ADD_SERVER,
        payload: servName
    })
}

export function addUri(uriName) {
    return ({
        type: ADD_URI,
        payload: uriName,
    })
}

export function setRequest(requestName) {
    return ({
        type: SET_REQUEST,
        payload: requestName,
    })
}

export function setData(data) {
    return ({
        type: SET_DATA,
        payload: data,
    })
}
