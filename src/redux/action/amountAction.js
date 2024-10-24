import { createAction } from "@reduxjs/toolkit";

export const ADD_AMOUNT_REQUEST = 'ADD_AMOUNT_REQUEST';
export const ADD_AMOUNT_SUCCESS = 'ADD_AMOUNT_SUCCESS';
export const ADD_AMOUNT_FAILURE = 'ADD_AMOUNT_FAILURE';

export const addAmountRequest = (obj) => {
    return {
        type: ADD_AMOUNT_REQUEST,
        payload: obj
    }
};

export const addAmountSuccess = createAction(ADD_AMOUNT_SUCCESS);
export const addAmountFailure = createAction(ADD_AMOUNT_FAILURE);