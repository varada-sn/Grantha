/*import { PDF_SEARCH_REQUEST, PDF_SEARCH_SUCCESS, PDF_SEARCH_FAILURE } from './actionType';

const initialState = {
  loading: false,
  results: [],
  error: null,
};

const pdfSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case PDF_SEARCH_REQUEST:
      return { ...state, loading: true, error: null };
    case PDF_SEARCH_SUCCESS:
      return { ...state, loading: false, results: action.payload };
    case PDF_SEARCH_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default pdfSearchReducer;
*/

import { PDF_SEARCH_REQUEST, PDF_SEARCH_SUCCESS, PDF_SEARCH_FAILURE, PDF_SEARCH_RESET } from './actionType';

const initialState = {
  loading: false,
  results: [],
  error: null,
};

const pdfSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case PDF_SEARCH_REQUEST:
      return { ...state, loading: true, results: [], error: null }; 
    case PDF_SEARCH_SUCCESS:
      return { ...state, loading: false, results: action.payload };
    case PDF_SEARCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case PDF_SEARCH_RESET: 
      return { ...initialState };
    default:
      return state;
  }
};

export default pdfSearchReducer;