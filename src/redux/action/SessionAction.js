import axios from "axios";
import {
  POST_SESSION_SUCCESS,
  POST_SESSION_LOADER,
  POST_SESSION_ERROR,
  PUT_SESSION_SUCCESS,
  PUT_SESSION_ERROR,
} from "./types";
import { postSesssion, putSession } from "../../Constant/enpoint";
export const setSessionLoader = () => {
  return (dispatch) =>
    dispatch({
      type: POST_SESSION_LOADER,
    });
};

export const postSession = (data, navigate) => {
  return (dispatch) => {
    axios
      .post(postSesssion, data)
      .then((res) => {
        console.log("response ==>", res);
        dispatch({
          type: POST_SESSION_SUCCESS,
          payload: res.data.data,
        });
        navigate("/live");
      })
      .catch((err) => {
        dispatch({
          type: POST_SESSION_ERROR,
          payload: err,
        });
      });
  };
};
export const removeSession = (id) => {
  return (dispatch) => {
    axios
      .put(putSession(id))
      .then((res) => {
        dispatch({
          type: PUT_SESSION_SUCCESS,
          payload: "",
        });
        alert("Session Stop Successfully !!!");
      })
      .catch((err) => {
        dispatch({
          type: PUT_SESSION_ERROR,
          payload: err,
        });
      });
  };
};
