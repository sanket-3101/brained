import axios from "axios";
import {
  POST_SESSION_SUCCESS,
  POST_SESSION_LOADER,
  POST_SESSION_ERROR,
  PUT_SESSION_SUCCESS,
  PUT_SESSION_ERROR,
  GET_ALL_SESSION_SUCCESS,
  SET_LIVE_DATA
} from "./types";
import { postSesssion, putSession ,getSesssion} from "../../Constant/enpoint";

import { NotificationManager } from "react-notifications";
export const setSessionLoader = () => {
  return (dispatch) =>
    dispatch({
      type: POST_SESSION_LOADER,
    });
};
export const setLiveData = (data) => {
  return (dispatch) =>
    dispatch({
      type: SET_LIVE_DATA,
      payload: data
    });
}
export const getAllSessions = () => {
  return (dispatch) => {
    axios
      .get(getSesssion)
      .then((res) => {
        dispatch({
          type: GET_ALL_SESSION_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
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
        dispatch({
          type: SET_LIVE_DATA,
          payload: []
        });
        NotificationManager.success("Session Stop Successfully !!!");
      })
      .catch((err) => {
        dispatch({
          type: PUT_SESSION_ERROR,
          payload: err,
        });
      });
  };
};
