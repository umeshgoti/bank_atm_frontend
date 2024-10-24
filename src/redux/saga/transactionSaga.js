import { call, delay, put, takeLatest } from "redux-saga/effects";
import { addAtmFailure, addAtmSuccess } from "../action/atmAction";
import Api from "../../api";
import { FETCH_TRANSACTION_REQUEST } from "../action/transactionAction";

const api = new Api();
// function* addAtmData(action) {
//     try {
//         const authToken = localStorage.getItem("token");
//         const response = yield call(api.postAPI, `api/atm`, action.payload, authToken);
//         yield put(addAtmSuccess(response.data.data.data));
//     } catch (error) {
//         yield put(addAtmFailure(error));
//     }
// }

function* fetchTransactionData() {
    try {
        const authToken = localStorage.getItem("token");
        const response = yield call(api.getAPI, `api/transactions`, authToken);
        yield put(addAtmSuccess(response.data.data));
    } catch (error) {
        yield put(addAtmFailure(error));
    }
}

export function* addTransactionSaga() {
    yield takeLatest(FETCH_TRANSACTION_REQUEST, fetchTransactionData);
    // yield takeLatest(FETCH_ATM_REQUEST, fetchAtmData);
}