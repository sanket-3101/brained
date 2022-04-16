import {
  POST_SESSION_SUCCESS,
  POST_SESSION_LOADER,
  POST_SESSION_ERROR,
} from "../action/types";
const INITIAL_STATE = {
  loader: false,
  sessionDetails: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_SESSION_LOADER:
      return {
        ...state,
        loader: true,
      };
    case POST_SESSION_SUCCESS:
      return {
        ...state,
        loader: false,
        error: null,
        sessionDetails: action.paylaod,
      };
    case POST_SESSION_ERROR:
      return {
        ...state,
        loader: false,
        sessionDetails: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
