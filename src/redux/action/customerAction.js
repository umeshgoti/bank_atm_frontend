import { createAction } from "@reduxjs/toolkit";

export const ADD_CUSTOMER_REQUEST = 'ADD_CUSTOMER_REQUEST';
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';

export const addCustomerRequest = (obj) => {
    return {
        type: ADD_CUSTOMER_REQUEST,
        payload: obj
    }
};

export const addCustomerSuccess = createAction(ADD_CUSTOMER_SUCCESS);
export const addCustomerFailure = createAction(ADD_CUSTOMER_FAILURE);

export const FETCH_CUSTOMER_REQUEST = 'FETCH_CUSTOMER_REQUEST';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';

export const fetchCustomerRequest = createAction(FETCH_CUSTOMER_REQUEST);
export const fetchCustomerSuccess = createAction(FETCH_CUSTOMER_SUCCESS);
export const fetchCustomerFailure = createAction(FETCH_CUSTOMER_FAILURE);