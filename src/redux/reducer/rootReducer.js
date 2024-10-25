import { combineReducers } from 'redux';
import { addAtmReducer } from './atmReducer';
import addTransactionReducer from './transactionReducer';
import addAmountReducer from './amountReducer';
import addCustomerReducer from './customerReducer';
import videoAndImageReducer from './v&iReducer';

const rootReducer = combineReducers({
    atm: addAtmReducer,
    transaction: addTransactionReducer,
    amount: addAmountReducer,
    customer: addCustomerReducer,
    video: videoAndImageReducer
});

export default rootReducer;
