import { combineReducers } from 'redux';
import { addAtmReducer } from './atmReducer';
import addTransactionReducer from './transactionReducer';
import addAmountReducer from './amountReducer';

const rootReducer = combineReducers({
    atm: addAtmReducer,
    transaction: addTransactionReducer,
    amount: addAmountReducer
});

export default rootReducer;
