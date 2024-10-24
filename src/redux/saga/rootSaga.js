import { all } from 'redux-saga/effects';
import { addAtmSaga } from './atmSaga';
import { addTransactionSaga } from './transactionSaga';

export default function* rootSaga() {
    yield all([
        addAtmSaga(),
        addTransactionSaga()
    ]);
}