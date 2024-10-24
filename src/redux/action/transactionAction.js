import { createAction } from "@reduxjs/toolkit";

export const FETCH_TRANSACTION_REQUEST = 'FETCH_TRANSACTION_REQUEST';
export const FETCH_TRANSACTION_SUCCESS = 'FETCH_TRANSACTION_SUCCESS';
export const FETCH_TRANSACTION_FAILURE = 'FETCH_TRANSACTION_FAILURE';

export const fetchTransactionRequest = createAction(FETCH_TRANSACTION_REQUEST);
export const fetchTransactionSuccess = createAction(FETCH_TRANSACTION_SUCCESS);
export const fetchTransactionFailure = createAction(FETCH_TRANSACTION_FAILURE);