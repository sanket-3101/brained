import axios from "axios";
import {
  GET_DEVICE_LOADER,
  GET_DEVICE_SUCCESS,
  GET_DEVICE_ERROR,
  GET_ALL_DEVICE_SUCCESS,
  GET_ALL_DEVICE_ERROR,
} from "./types";
import { getDevice, getDeviceById } from "../../Constant/enpoint";
import ErrorHandler from "../../Component/helper/ErrorHandler";
export const setLoader = () => {
  return (dispatch) =>
    dispatch({
      type: GET_DEVICE_LOADER,
    });
};

export const getAllDevice = () => {
  return (dispatch) => {
    axios
      .get(getDevice)
      .then((res) => {
        console.log('res ==>', res)
        dispatch({
          type: GET_ALL_DEVICE_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log('res ==>', err)
        dispatch({
          type: GET_ALL_DEVICE_ERROR,
          payload: err,
        });
      });
  };
};
export const deviceById = (id) => {
  return (dispatch) => {
    axios
      .get(getDeviceById(id))
      .then((res) => {
        dispatch({
          type: GET_DEVICE_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        ErrorHandler(err)
        dispatch({
          type: GET_DEVICE_ERROR,
          payload: err,
        });
      });
  };
};
