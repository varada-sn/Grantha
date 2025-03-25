/*import axios from "axios";
import { PODCAST_SEARCH_REQUEST, PODCAST_SEARCH_SUCCESS, PODCAST_SEARCH_FAILURE } from "./actionType";
import { API_URL } from "../../Config/api";

// Podcast Search Action
export const podcastSearch = (searchQuery) => async (dispatch) => {
    dispatch({ type: PODCAST_SEARCH_REQUEST });

    try {
        const { data } = await axios.get(`${API_URL}/api/podcasts`, {
            params: { bookname: searchQuery, author: searchQuery, genre: searchQuery },
        });

        dispatch({ type: PODCAST_SEARCH_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.response?.data || "Something went wrong";
        dispatch({ type: PODCAST_SEARCH_FAILURE, payload: errorMessage });
    }
};
*/

import axios from "axios";
import { 
    PODCAST_SEARCH_REQUEST, 
    PODCAST_SEARCH_SUCCESS, 
    PODCAST_SEARCH_FAILURE, 
    PODCAST_SEARCH_RESET 
} from "./actionType";
import { API_URL } from "../../Config/api";

// ✅ Reset Podcast Search Action
export const resetPodcastSearch = () => ({
    type: PODCAST_SEARCH_RESET,
});

// ✅ Podcast Search Action with Improved Error Handling
export const podcastSearch = (searchQuery) => async (dispatch) => {
    dispatch(resetPodcastSearch()); // ✅ Clears old results before new search
    dispatch({ type: PODCAST_SEARCH_REQUEST });

    try {
        const { data } = await axios.get(`${API_URL}/api/podcasts`, {
            params: { bookname: searchQuery, author: searchQuery, genre: searchQuery },
        });

        dispatch({ type: PODCAST_SEARCH_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
        dispatch({ type: PODCAST_SEARCH_FAILURE, payload: errorMessage });
    }
};
