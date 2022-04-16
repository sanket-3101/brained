import axios from "axios";
import { GET_QUIZ_LOADER, GET_QUIZ_SUCCESS, GET_QUIZ_ERROR } from "./types";
import { getQuiz } from "../../Constant/enpoint";
export const setLoader = () => {
  return (dispatch) =>
    dispatch({
      type: GET_QUIZ_LOADER,
    });
};


export const getQuizDetails = (id) => {
  return (dispatch) => {
    axios
      .get(getQuiz(id))
      .then((res) => {
        dispatch({
          type: GET_QUIZ_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_QUIZ_ERROR,
          payload: err,
        });
      });
  };
};
