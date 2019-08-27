import { 
    CLICK_UPDATE_VALUE,
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR
} from '../actions/actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    payload: value
});

export const getData = value => ({
    type: GET_DATA,
    payload: value
});

export const getDataSuccess = value => ({
    type: GET_DATA_SUCCESS,
    payload: value
});

export const getDataError = value => ({
    type: GET_DATA_ERROR,
    payload: value
});