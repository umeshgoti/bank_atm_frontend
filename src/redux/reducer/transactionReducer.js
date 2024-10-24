import { FETCH_ATM_FAILURE, FETCH_ATM_REQUEST, FETCH_ATM_SUCCESS } from "../action/atmAction";

const initialState = {
    atmData: []
};

export const addTransactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ATM_REQUEST:
            return {
                ...state,
                error: null,
            };
        case FETCH_ATM_SUCCESS:
            return {
                ...state,
                atmData: action.payload,
            };
        case FETCH_ATM_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default addTransactionReducer;
