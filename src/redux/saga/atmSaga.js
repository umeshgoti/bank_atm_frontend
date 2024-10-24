import { call, delay, put, takeLatest } from "redux-saga/effects";
import { ADD_ATM_REQUEST, addAtmFailure, addAtmSuccess, FETCH_ATM_REQUEST, fetchAtmFailure, fetchAtmRequest, fetchAtmSuccess } from "../action/atmAction";
import Api from "../../api";

const api = new Api();
function* addAtmData(action) {
    try {
        const authToken = localStorage.getItem("token");
        yield call(api.postAPI, `api/atm`, action.payload, authToken);
        yield put(fetchAtmRequest());
    } catch (error) {
        yield put(addAtmFailure(error));
    }
}

function* fetchAtmData() {
    try {
        const authToken = localStorage.getItem("token");
        const response = yield call(api.getAPI, `api/atm`, authToken);
        yield put(fetchAtmSuccess(response.data.data));
    } catch (error) {
        yield put(fetchAtmFailure(error));
    }
}

export function* addAtmSaga() {
    yield takeLatest(ADD_ATM_REQUEST, addAtmData);
    yield takeLatest(FETCH_ATM_REQUEST, fetchAtmData);
}