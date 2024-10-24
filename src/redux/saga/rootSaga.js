import { all } from 'redux-saga/effects';
import { addAtmSaga } from './atmSaga';

export default function* rootSaga() {
    yield all([
        addAtmSaga()
    ]);
}