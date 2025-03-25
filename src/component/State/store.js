import { combineReducers, legacy_createStore } from 'redux';
import pdfSearchReducer from "./pdfSearch/reducer";  // Import the search reducer
import podcastSearchReducer from "./podcastSearch/reducer";
import videoSearchReducer from "../State/videoSearch/reducer";
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // to handle async actions
//import rootReducer from './reducers/rootReducer';  // Import combined reducers

const rootReducer = combineReducers({
  pdfSearch: pdfSearchReducer,  // Add your search reducer here
  podcastSearch: podcastSearchReducer,
  videoSearch: videoSearchReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));