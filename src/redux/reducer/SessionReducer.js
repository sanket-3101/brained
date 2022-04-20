import {
  POST_SESSION_SUCCESS,
  POST_SESSION_LOADER,
  POST_SESSION_ERROR,
  PUT_SESSION_SUCCESS,
  PUT_SESSION_ERROR,
  GET_ALL_SESSION_SUCCESS,
  SET_LIVE_DATA,
} from "../action/types";
const INITIAL_STATE = {
  loader: false,
  sessionDetails: null,
  error: null,
  sessionsList: [],
  livedata: [],
  liveDataLoader: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_SESSION_LOADER:
      return {
        ...state,
        loader: true,
      };
    case GET_ALL_SESSION_SUCCESS:
      return {
        ...state,
        sessionsList: action.payload,
      };
    case POST_SESSION_SUCCESS:
      return {
        ...state,
        loader: false,
        error: null,
        sessionDetails: action.payload,
      };
    case POST_SESSION_ERROR:
      return {
        ...state,
        loader: false,
        sessionDetails: null,
        error: action.payload,
      };
    case PUT_SESSION_SUCCESS:
      return {
        ...state,
        loader: false,
        sessionDetails: null,
        error: null,
      };
    case PUT_SESSION_ERROR:
      return {
        ...state,
        loader: false,
      };
    case SET_LIVE_DATA:
      return {
        ...state,
        livedata: action.payload,
        liveDataLoader: false,
      };
    default:
      return state;
  }
};
