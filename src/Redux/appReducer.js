import {getAuthUserData} from "./authReducer";
import * as Propmise from "axios";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}


export const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS}
}


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())

    Propmise.all([promise]).then(() => {
        dispatch(initializedSuccess(true))
    })
}


export default appReducer