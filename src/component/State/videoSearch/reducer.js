/*
import { VIDEO_SEARCH_REQUEST, VIDEO_SEARCH_SUCCESS, VIDEO_SEARCH_FAILURE } from "./actionType";

const initialState = {
  videoLoading: false,
  videos: [],
  videoError: null,
};

const videoSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_SEARCH_REQUEST:
      return { ...state, videoLoading: true, videoError: null };
    case VIDEO_SEARCH_SUCCESS:
      return { ...state, videoLoading: false, videos: action.payload };
    case VIDEO_SEARCH_FAILURE:
      return { ...state, videoLoading: false, videoError: action.payload };

    default:
      return state;
  }
};

export default videoSearchReducer;
*/

import { 
  VIDEO_SEARCH_REQUEST, 
  VIDEO_SEARCH_SUCCESS, 
  VIDEO_SEARCH_FAILURE, 
  VIDEO_SEARCH_RESET 
} from "./actionType";

const initialState = {
videoLoading: false,
videos: [],
videoError: null,
};

const videoSearchReducer = (state = initialState, action) => {
switch (action.type) {
  case VIDEO_SEARCH_RESET:
    return { ...initialState }; // ✅ Clears previous search results

  case VIDEO_SEARCH_REQUEST:
    return { ...state, videoLoading: true, videoError: null };

  case VIDEO_SEARCH_SUCCESS:
    return { ...state, videoLoading: false, videos: action.payload };

  case VIDEO_SEARCH_FAILURE:
    return { ...state, videoLoading: false, videoError: action.payload };

  default:
    return state;
}
};

export default videoSearchReducer;