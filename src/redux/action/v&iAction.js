import { createAction } from "@reduxjs/toolkit";

export const START_VIDEO_REQUEST = 'START_VIDEO_REQUEST';
export const START_VIDEO_SUCCESS = 'START_VIDEO_SUCCESS';
export const START_VIDEO_FAILURE = 'START_VIDEO_FAILURE';

export const startVideoRequest = (obj) => {
    console.log(obj)
    return {
        type: START_VIDEO_REQUEST,
        payload: obj
    }
};

export const startVideoSuccess = createAction(START_VIDEO_SUCCESS);
export const startVideoFailure = createAction(START_VIDEO_FAILURE);


export const END_VIDEO_REQUEST = 'END_VIDEO_REQUEST';
export const END_VIDEO_SUCCESS = 'END_VIDEO_SUCCESS';
export const END_VIDEO_FAILURE = 'END_VIDEO_FAILURE';

export const endVideoRequest = (id) => {
    return {
        type: END_VIDEO_REQUEST,
        payload: id
    }
};

export const endVideoSuccess = createAction(END_VIDEO_SUCCESS);
export const endVideoFailure = createAction(END_VIDEO_FAILURE);


export const FETCH_VIDEO_AND_IMAGE_REQUEST = 'FETCH_VIDEO_AND_IMAGE_REQUEST';
export const FETCH_VIDEO_AND_IMAGE_SUCCESS = 'FETCH_VIDEO_AND_IMAGE_SUCCESS';
export const FETCH_VIDEO_AND_IMAGE_FAILURE = 'FETCH_VIDEO_AND_IMAGE_FAILURE';

export const fetchVideoAndImageRequest = createAction(FETCH_VIDEO_AND_IMAGE_REQUEST);
export const fetchVideoAndImageSuccess = createAction(FETCH_VIDEO_AND_IMAGE_SUCCESS);
export const fetchVideoAndImageFailure = createAction(FETCH_VIDEO_AND_IMAGE_FAILURE);
