import {
    CLICK_UPDATE_VALUE,
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR
} from '../actions/actionTypes';

const initialState = {
    newValue: '0',
    data: [],
    loadingData: false,
    errorData: null
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.payload
            };
        case GET_DATA:
            return {
                ...state,
                loadingData: action.payload
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                errorData: action.payload
            };
        default:
            return state;
    }
};