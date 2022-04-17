import axios from "axios";
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
} from "./types";
import {
  getSubject,
  getSubjectById,
  postSubject,
  putSubjectById,
  deleteSubjectById,
} from "../../Constant/enpoint";
export const setLoader = () => {
  return (dispatch) =>
    dispatch({
      type: SUBJECT_LOADER,
    });
};

export const getAllSubject = () => {
  return (dispatch) => {
    axios
      .get(getSubject)
      .then((res) => {
        console.log(res)
        dispatch({
          type: GET_ALL_SUBJECT_SUCCESS,
          payload: res.data.data
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ALL_SUBJECT_ERROR,
          payload: err
        });
      });
  };
};
export const subjectById = (id) => {
  return (dispatch) => {
    axios
      .get(getSubjectById(id))
      .then((res) => {
        dispatch({
          type: GET_SUBJECT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SUBJECT_ERROR,
        });
      });
  };
};
export const postNewSubject = (data) => {
  return (dispatch) => {
    axios
      .post(postSubject, data)
      .then((res) => {
        dispatch({
          type: POST_SUBJECT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_SUBJECT_ERROR,
        });
      });
  };
};
export const deleteSingleSubject = (id) => {
  return (dispatch) => {
    axios
      .delete(deleteSubjectById(id))
      .then((res) => {
        dispatch({
          type: DELETE_SUBJECT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_SUBJECT_ERROR,
        });
      });
  };
};
export const updateSingleSubject = (id) => {
  return (dispatch) => {
    axios
      .put(putSubjectById(id))
      .then((res) => {
        dispatch({
          type: PUT_SUBJECT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: PUT_SUBJECT_ERROR,
        });
      });
  };
};
