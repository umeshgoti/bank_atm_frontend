import { ADD_AMOUNT_FAILURE, ADD_AMOUNT_REQUEST, ADD_AMOUNT_SUCCESS } from "../action/amountAction";

const initialState = {
    amountData: []
};

export const addAmountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AMOUNT_REQUEST:
            return {
                ...state,
                error: null,
            };
        case ADD_AMOUNT_SUCCESS:
            return {
                ...state,
                amountData: action.payload,
            };
        case ADD_AMOUNT_FAILURE:
            return {
                ...state,
                amountData: action.payload,
            };
        default:
            return state;
    }
};

export default addAmountReducer;
