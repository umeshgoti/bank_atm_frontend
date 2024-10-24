import { combineReducers } from 'redux';
import { addAtmReducer } from './atmReducer';

const rootReducer = combineReducers({
    atm: addAtmReducer
});

export default rootReducer;
