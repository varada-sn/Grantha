/*
import { PODCAST_SEARCH_REQUEST, PODCAST_SEARCH_SUCCESS, PODCAST_SEARCH_FAILURE } from './actionType';

const initialState = {
  podcastLoading: false,
  podcasts: [],
  podcastError: null,
};

const podcastSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case PODCAST_SEARCH_REQUEST:
      return { ...state, podcastLoading: true, podcastError: null };
    case PODCAST_SEARCH_SUCCESS:
      return { ...state, podcastLoading: false, podcasts: action.payload };
    case PODCAST_SEARCH_FAILURE:
      return { ...state, podcastLoading: false, podcastError: action.payload };

    default:
      return state;
  }
};

export default podcastSearchReducer;
*/

import { 
  PODCAST_SEARCH_REQUEST, 
  PODCAST_SEARCH_SUCCESS, 
  PODCAST_SEARCH_FAILURE, 
  PODCAST_SEARCH_RESET 
} from './actionType';

const initialState = {
podcastLoading: false,
podcasts: [],
podcastError: null,
};

const podcastSearchReducer = (state = initialState, action) => {
switch (action.type) {
  case PODCAST_SEARCH_RESET:
    return { ...initialState }; // ✅ Clears previous search results

  case PODCAST_SEARCH_REQUEST:
    return { ...state, podcastLoading: true, podcastError: null };

  case PODCAST_SEARCH_SUCCESS:
    return { ...state, podcastLoading: false, podcasts: action.payload };

  case PODCAST_SEARCH_FAILURE:
    return { ...state, podcastLoading: false, podcastError: action.payload };

  default:
    return state;
}
};

export default podcastSearchReducer;
