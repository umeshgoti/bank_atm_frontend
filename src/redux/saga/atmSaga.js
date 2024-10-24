import { call, delay, put, takeLatest } from "redux-saga/effects";
import { ADD_ATM_REQUEST, addAtmFailure, addAtmSuccess, FETCH_ATM_REQUEST } from "../action/atmAction";
import Api from "../../api";

const api = new Api();
function* addAtmData(action) {
    try {
        const authToken = localStorage.getItem("token");
        const response = yield call(api.postAPI, `api/atm`, action.payload, authToken);
        console.log(response)
        yield put(addAtmSuccess(response.data.data.data));
    } catch (error) {
        yield put(addAtmFailure(error));
    }
}

function* fetchAtmData() {
    try {
        const authToken = localStorage.getItem("token");
        const response = yield call(api.getAPI, `api/atm`, authToken);
        console.log(response)
        yield put(addAtmSuccess(response.data.data.data));
    } catch (error) {
        yield put(addAtmFailure(error));
    }
}

export function* addAtmSaga() {
    yield takeLatest(ADD_ATM_REQUEST, addAtmData);
    yield takeLatest(FETCH_ATM_REQUEST, fetchAtmData);
}