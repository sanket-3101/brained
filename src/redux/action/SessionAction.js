import axios from "axios";
import {
  POST_SESSION_SUCCESS,
  POST_SESSION_LOADER,
  POST_SESSION_ERROR,
  PUT_SESSION_SUCCESS,
  PUT_SESSION_ERROR,
  GET_ALL_SESSION_SUCCESS
} from "./types";
import { postSesssion, putSession ,getSesssion} from "../../Constant/enpoint";
import { NotificationManager } from "react-notifications";
export const setSessionLoader = () => {
  return (dispatch) =>
    dispatch({
      type: POST_SESSION_LOADER,
    });
};
export const getAllSessions = () => {
  return (dispatch) => {
    axios
      .get(getSesssion)
      .then((res) => {
        console.log('res ==>', res)
        dispatch({
          type: GET_ALL_SESSION_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log('res ==>', err)
        dispatch({
          type: POST_SESSION_ERROR,
          payload: err,
        });
      });
  };
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
        NotificationManager.error("Session Stop Successfully !!!");
      })
      .catch((err) => {
        dispatch({
          type: PUT_SESSION_ERROR,
          payload: err,
        });
      });
  };
};
