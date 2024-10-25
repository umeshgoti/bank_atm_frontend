import { all } from 'redux-saga/effects';
import { addAtmSaga } from './atmSaga';
import { addTransactionSaga } from './transactionSaga';
import { addAmountSaga } from './amountSaga';
import { addCustomerSaga } from './customerSaga';
import { videoAndImageSaga } from './v&iSaga';

export default function* rootSaga() {
    yield all([
        addAtmSaga(),
        addTransactionSaga(),
        addAmountSaga(),
        addCustomerSaga(),
        videoAndImageSaga()
    ]);
}