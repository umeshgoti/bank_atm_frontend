import { call,  put, takeLatest } from "redux-saga/effects";
import Api from "../../api";
import { ADD_CUSTOMER_REQUEST, addCustomerFailure, FETCH_CUSTOMER_REQUEST, fetchCustomerFailure, fetchCustomerRequest, fetchCustomerSuccess } from "../action/customerAction";

const api = new Api();
function* addCustomerData(action) {
    try {
        const authToken = localStorage.getItem("token");
        yield call(api.postAPI, `user/signup`, action.payload, authToken);
        yield put(fetchCustomerRequest());
    } catch (error) {
        yield put(addCustomerFailure(error));
    }
}

function* fetchCustomerData() {
    try {
        const authToken = localStorage.getItem("token");
        const response = yield call(api.getAPI, `user/getAllCustomer`, authToken);
        yield put(fetchCustomerSuccess(response.data.data));
    } catch (error) {
        yield put(fetchCustomerFailure(error));
    }
}

export function* addCustomerSaga() {
    yield takeLatest(ADD_CUSTOMER_REQUEST, addCustomerData);
    yield takeLatest(FETCH_CUSTOMER_REQUEST, fetchCustomerData);
}