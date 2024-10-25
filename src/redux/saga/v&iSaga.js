import { call, put, takeLatest } from "redux-saga/effects";
import Api from "../../api";
import { END_VIDEO_REQUEST, endVideoFailure, FETCH_VIDEO_AND_IMAGE_REQUEST, fetchVideoAndImageFailure, fetchVideoAndImageRequest, fetchVideoAndImageSuccess, START_VIDEO_REQUEST, startVideoFailure } from "../action/v&iAction";

const api = new Api();
function* startVideo(action) {
    try {
        const authToken = localStorage.getItem("token");
        yield call(api.postAPI, `api/log-records`, action.payload, authToken);
        yield put(fetchVideoAndImageRequest());
    } catch (error) {
        yield put(startVideoFailure(error));
    }
}

function* endVideo(action) {
    try {
        const authToken = localStorage.getItem("token");
        yield call(api.putAPI, `api/log-records/${action.payload}`, undefined, authToken);
        yield put(fetchVideoAndImageRequest());
    } catch (error) {
        yield put(endVideoFailure(error));
    }
}

function* fetchVideoAndImage() {
    try {
        const authToken = localStorage.getItem("token");
        const response = yield call(api.getAPI, `api/log-records`, authToken);
        yield put(fetchVideoAndImageSuccess(response.data.data));
    } catch (error) {
        yield put(fetchVideoAndImageFailure(error));
    }
}

export function* videoAndImageSaga() {
    yield takeLatest(START_VIDEO_REQUEST, startVideo);
    yield takeLatest(END_VIDEO_REQUEST, endVideo);
    yield takeLatest(FETCH_VIDEO_AND_IMAGE_REQUEST, fetchVideoAndImage);
}