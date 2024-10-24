import { FETCH_CUSTOMER_FAILURE, FETCH_CUSTOMER_REQUEST, FETCH_CUSTOMER_SUCCESS } from "../action/customerAction";

const initialState = {
    customerData: []
};

export const addCustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMER_REQUEST:
            return {
                ...state,
                error: null,
            };
        case FETCH_CUSTOMER_SUCCESS:
            return {
                ...state,
                customerData: action.payload,
            };
        case FETCH_CUSTOMER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default addCustomerReducer;
