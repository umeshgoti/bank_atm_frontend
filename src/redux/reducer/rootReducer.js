import { combineReducers } from 'redux';
import { addAtmReducer } from './atmReducer';
import addTransactionReducer from './transactionReducer';

const rootReducer = combineReducers({
    atm: addAtmReducer,
    transaction: addTransactionReducer
});

export default rootReducer;
