import axios from "axios";
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
} from "./types";
import {
  getChapter,
  getChapterById,
  postChapter,
  putChapterById,
  deleteChapterById,
} from "../../Constant/enpoint";
export const setChapterLoader = () => {
  return (dispatch) =>
    dispatch({
      type: SET_CHAPTER_LOADER,
    });
};

export const getAllChapter = () => {
  return (dispatch) => {
    axios
      .get(getChapter)
      .then((res) => {
        dispatch({
          type: GET_ALL_CHAPTER_SUCCESS,
          payload: res.data.data
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ALL_CHAPTER_ERROR,
          payload: err
        });
      });
  };
};
export const chapterById = (id) => {
  return (dispatch) => {
    axios
      .get(getChapterById(id))
      .then((res) => {
        dispatch({
          type: GET_CHAPTER_SUCCESS,
          payload: res.data.data
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_CHAPTER_ERROR,
          payload: err
        });
      });
  };
};
export const postNewChapter = (data) => {
  return (dispatch) => {
    axios
      .post(postChapter, data)
      .then((res) => {
        dispatch({
          type: POST_CHAPTER_SUCCESS,
          payload: res.data.data
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_CHAPTER_ERROR,
          payload: err
        });
      });
  };
};
export const deleteSingleChapter = (id) => {
  return (dispatch) => {
    axios
      .delete(deleteChapterById(id))
      .then((res) => {
        dispatch({
          type: DELETE_CHAPTER_SUCCESS,
          payload: res.data.data
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_CHAPTER_ERROR,
          payload: err
        });
      });
  };
};
export const updateSingleChapter = (id) => {
  return (dispatch) => {
    axios
      .put(putChapterById(id))
      .then((res) => {
        dispatch({
          type: PUT_CHAPTER_SUCCESS,
          payload: res.data.data
        });
      })
      .catch((err) => {
        dispatch({
          type: PUT_CHAPTER_ERROR,
          payload: err
        });
      });
  };
};
