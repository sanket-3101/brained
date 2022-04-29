import {
  GET_QUIZ_LOADER,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_ERROR,
} from "../action/types";

const INITIAL_STATE = {
  loader: false,
  quizDetails: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_QUIZ_LOADER:
      return {
        ...state,
        loader: true,
      };
    case GET_QUIZ_SUCCESS:
      return {
        ...state,
        loader: false,
        error: null,
        quizDetails: action.payload,
      };
    case GET_QUIZ_ERROR:
      return {
        ...state,
        loader: false,
        quizDetails: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
