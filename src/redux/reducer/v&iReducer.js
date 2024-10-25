import { FETCH_VIDEO_AND_IMAGE_FAILURE, FETCH_VIDEO_AND_IMAGE_REQUEST, FETCH_VIDEO_AND_IMAGE_SUCCESS } from "../action/v&iAction";

const initialState = {
    videoData: []
};

export const videoAndImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VIDEO_AND_IMAGE_REQUEST:
            return {
                ...state,
                error: null,
            };
        case FETCH_VIDEO_AND_IMAGE_SUCCESS:
            return {
                ...state,
                videoData: action.payload,
            };
        case FETCH_VIDEO_AND_IMAGE_FAILURE:
            return {
                ...state,
                videoData: action.payload,
            };
        default:
            return state;
    }
};

export default videoAndImageReducer;
