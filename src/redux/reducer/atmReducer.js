import { FETCH_ATM_FAILURE, FETCH_ATM_REQUEST, FETCH_ATM_SUCCESS } from "../action/atmAction";
import { FETCH_TRANSACTION_FAILURE, FETCH_TRANSACTION_REQUEST, FETCH_TRANSACTION_SUCCESS } from "../action/transactionAction";

const initialState = {
    atmData: []
};

export const addAtmReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case FETCH_TRANSACTION_REQUEST:
            return {
                ...state,
                error: null,
            };
        case FETCH_TRANSACTION_SUCCESS:
            return {
                ...state,
                atmData: action.payload,
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

export default addAtmReducer;
