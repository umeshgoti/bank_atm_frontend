import { call, put, takeLatest } from "redux-saga/effects";
import Api from "../../api";
import { ADD_AMOUNT_REQUEST, addAmountFailure, addAmountSuccess } from "../action/amountAction";

const api = new Api();
function* addAmountData(action) {
    try {
        const authToken = localStorage.getItem("token");
        const response = yield call(api.postAPI, `api/transactions`, action.payload, authToken);
        yield put(addAmountSuccess(response.data.message));
    } catch (error) {
        yield put(addAmountFailure(error.response.data.message));
    }
}


export function* addAmountSaga() {
    yield takeLatest(ADD_AMOUNT_REQUEST, addAmountData);
}