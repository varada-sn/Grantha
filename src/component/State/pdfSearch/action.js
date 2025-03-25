/*import axios from "axios";
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "./actionType";
import { API_URL } from "../../Config/api";

export const search = (searchQuery) => async (dispatch) => {
    dispatch({ type: SEARCH_REQUEST });

    try {
        // Make the GET request with query params
        const { data } = await axios.get(`${API_URL}/pdfs/search`, {
            params: { bookname: searchQuery, author: searchQuery, genre: searchQuery },
        });

        // Dispatch success with data
        dispatch({ type: SEARCH_SUCCESS, payload: data });
    } catch (error) {
        // Check for a response error and dispatch failure
        const errorMessage = error.response?.data || "Something went wrong";
        console.error("Search error:", errorMessage);
        dispatch({ type: SEARCH_FAILURE, payload: errorMessage });
    }
};
*/

/*
import axios from "axios";
import { PDF_SEARCH_REQUEST, PDF_SEARCH_SUCCESS, PDF_SEARCH_FAILURE } from "./actionType";
import { API_URL } from "../../Config/api";

// PDF Search Action
export const pdfSearch = (searchQuery) => async (dispatch) => {
    dispatch({ type: PDF_SEARCH_REQUEST });

    try {
        const { data } = await axios.get(`${API_URL}/pdfs/search`, {
            params: { bookname: searchQuery, author: searchQuery, genre: searchQuery },
        });

        dispatch({ type: PDF_SEARCH_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.response?.data || "Something went wrong";
        dispatch({ type: PDF_SEARCH_FAILURE, payload: errorMessage });
    }
};
*/
import axios from "axios";
import { 
    PDF_SEARCH_REQUEST, 
    PDF_SEARCH_SUCCESS, 
    PDF_SEARCH_FAILURE, 
    PDF_SEARCH_RESET 
} from "./actionType";
import { API_URL } from "../../Config/api";

// ✅ Reset action to clear old search results before new search
export const resetPdfSearch = () => ({
    type: PDF_SEARCH_RESET,
});

// ✅ PDF Search Action
export const pdfSearch = (searchQuery) => async (dispatch) => {
    dispatch(resetPdfSearch());  // Clears previous results before searching
    dispatch({ type: PDF_SEARCH_REQUEST });

    try {
        const { data } = await axios.get(`${API_URL}/pdfs/search`, {
            params: { 
                bookname: searchQuery, 
                author: searchQuery, 
                genre: searchQuery 
            },
        });

        dispatch({ type: PDF_SEARCH_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = 
            error.response?.data?.message || 
            error.message || 
            "Something went wrong";

        dispatch({ type: PDF_SEARCH_FAILURE, payload: errorMessage });
    }
};
