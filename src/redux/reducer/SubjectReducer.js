import {
  SUBJECT_LOADER,
  GET_ALL_SUBJECT_SUCCESS,
  GET_ALL_SUBJECT_ERROR,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_ERROR,
  POST_SUBJECT_SUCCESS,
  POST_SUBJECT_ERROR,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_ERROR,
  PUT_SUBJECT_SUCCESS,
  PUT_SUBJECT_ERROR,
} from '../action/types'    

const INITIAL_STATE = {
  loader: false,
  subject: [],
  subjectDetails: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBJECT_LOADER:
      return {
        ...state,
        loader: true,
      };
    case GET_ALL_SUBJECT_SUCCESS:
      return {
        ...state,
        loader: false,
        subject: action.payload,
        error: null,
      };
    case GET_ALL_SUBJECT_ERROR:
      return {
        ...state,
        loader: false,
        subject: action.payload,
        error: action.payload,
      };
    case GET_SUBJECT_SUCCESS:
      return {
        ...state,
        loader: false,
        subjectDetails: action.payload,
        error: null,
      };
    case GET_SUBJECT_ERROR:
      return {
        ...state,
        loader: false,
        subjectDetails: null,
        error: action.payload,
      };
    case POST_SUBJECT_SUCCESS:
      return {
        ...state,
        loader: false,
        error: null,
      };
    case POST_SUBJECT_ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
