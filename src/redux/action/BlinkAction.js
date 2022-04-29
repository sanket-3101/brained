import axios from "axios";
import { SET_BLINK_LOADER, SET_BLINK_SUCCESS, SET_BLINK_ERROR } from "./types";

export const setBlinkLoader = () => {
  return (dispatch) =>
    dispatch({
      type: SET_BLINK_LOADER,
    });
};

export const setBlinkData = (data) => {
  return (dispatch) =>
    dispatch({
      type: SET_BLINK_SUCCESS,
      payload: data,
    });
};
export const setBlinkError = (data) => {
    return (dispatch) =>
      dispatch({
        type: SET_BLINK_ERROR,
        payload: data,
      });
  };