import { FETCH_ATM_FAILURE, FETCH_ATM_REQUEST, FETCH_ATM_SUCCESS } from "../action/atmAction";
import { FETCH_TRANSACTION_FAILURE, FETCH_TRANSACTION_REQUEST, FETCH_TRANSACTION_SUCCESS } from "../action/transactionAction";

const initialState = {
    transactionData: []
};

export const addTransactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRANSACTION_REQUEST:
            return {
                ...state,
                error: null,
            };
        case FETCH_TRANSACTION_SUCCESS:
            return {
                ...state,
                transactionData: action.payload,
            };
        case FETCH_TRANSACTION_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default addTransactionReducer;
