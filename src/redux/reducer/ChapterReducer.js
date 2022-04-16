import {
  SET_CHAPTER_LOADER,
  GET_ALL_CHAPTER_SUCCESS,
  GET_ALL_CHAPTER_ERROR,
  GET_CHAPTER_SUCCESS,
  GET_CHAPTER_ERROR,
  POST_CHAPTER_SUCCESS,
  POST_CHAPTER_ERROR,
  DELETE_CHAPTER_SUCCESS,
  DELETE_CHAPTER_ERROR,
  PUT_CHAPTER_SUCCESS,
  PUT_CHAPTER_ERROR,
} from "../action/types";

const INITIAL_STATE = {
  loader: false,
  chapter: [],
  chapterDetails: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CHAPTER_LOADER:
      return {
        ...state,
        loader: true,
      };
    case GET_ALL_CHAPTER_SUCCESS:
      return {
        ...state,
        loader: false,
        chapter: action.payload,
        error: null,
      };
    case GET_ALL_CHAPTER_ERROR:
      return {
        ...state,
        loader: false,
        chapter: action.payload,
        error: action.payload,
      };
    case GET_CHAPTER_SUCCESS:
      return {
        ...state,
        loader: false,
        chapterDetails: action.payload,
        error: null,
      };
    case GET_CHAPTER_ERROR:
      return {
        ...state,
        loader: false,
        chapterDetails: null,
        error: action.payload,
      };
    case POST_CHAPTER_SUCCESS:
      return {
        ...state,
        loader: false,
        error: null,
      };
    case POST_CHAPTER_ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
