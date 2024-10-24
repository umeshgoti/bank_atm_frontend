import { createAction } from "@reduxjs/toolkit";

export const ADD_ATM_REQUEST = 'ADD_ATM_REQUEST';
export const ADD_ATM_SUCCESS = 'ADD_ATM_SUCCESS';
export const ADD_ATM_FAILURE = 'ADD_ATM_FAILURE';

export const addAtmRequest = (obj) => {
    return {
        type: ADD_ATM_REQUEST,
        payload: obj
    }
};

export const addAtmSuccess = createAction(ADD_ATM_SUCCESS);
export const addAtmFailure = createAction(ADD_ATM_FAILURE);

export const FETCH_ATM_REQUEST = 'FETCH_ATM_REQUEST';
export const FETCH_ATM_SUCCESS = 'FETCH_ATM_SUCCESS';
export const FETCH_ATM_FAILURE = 'FETCH_ATM_FAILURE';

export const fetchAtmRequest = createAction(FETCH_ATM_REQUEST);
export const fetchAtmSuccess = createAction(FETCH_ATM_SUCCESS);
export const fetchAtmFailure = createAction(FETCH_ATM_FAILURE);