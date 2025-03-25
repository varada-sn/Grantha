/*import axios from "axios";
import { VIDEO_SEARCH_REQUEST, VIDEO_SEARCH_SUCCESS, VIDEO_SEARCH_FAILURE } from "./actionType";
import { API_URL } from "../../Config/api";

// Video Search Action
export const videoSearch = (searchQuery) => async (dispatch) => {
    dispatch({ type: VIDEO_SEARCH_REQUEST });

    try {
        const { data } = await axios.get(`${API_URL}/api/youtube`, {
            params: { bookname: searchQuery, author: searchQuery, genre: searchQuery },
        });

        dispatch({ type: VIDEO_SEARCH_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.response?.data || "Something went wrong";
        dispatch({ type: VIDEO_SEARCH_FAILURE, payload: errorMessage });
    }
};
*/

import axios from "axios";
import { 
    VIDEO_SEARCH_REQUEST, 
    VIDEO_SEARCH_SUCCESS, 
    VIDEO_SEARCH_FAILURE, 
    VIDEO_SEARCH_RESET 
} from "./actionType";
import { API_URL } from "../../Config/api";

// ✅ Reset Video Search Action
export const resetVideoSearch = () => ({
    type: VIDEO_SEARCH_RESET,
});

// ✅ Video Search Action with Improved Error Handling
export const videoSearch = (searchQuery) => async (dispatch) => {
    dispatch(resetVideoSearch()); // ✅ Clears old results before a new search
    dispatch({ type: VIDEO_SEARCH_REQUEST });

    try {
        const { data } = await axios.get(`${API_URL}/api/youtube`, {
            params: { bookname: searchQuery, author: searchQuery, genre: searchQuery },
        });

        dispatch({ type: VIDEO_SEARCH_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
        dispatch({ type: VIDEO_SEARCH_FAILURE, payload: errorMessage });
    }
};