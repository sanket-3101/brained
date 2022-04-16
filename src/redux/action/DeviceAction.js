import axios from "axios";
import { getDevice,getDeviceById } from "../../Constant/enpoint";
import { GET_ALL_DEVICE_SUCCESS, GET_ALL_DEVICE_ERROR, GET_ALL_DEVICE_LOADER } from "./types";

export const getAllDevice = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_DEVICE_LOADER });
    axios
      .get(getDevice)
      .then((res) => {
        if (res) {
          // dispatch({ type: GET_ALL_DEVICE_SUCCESS });
          dispatch({ type: GET_ALL_DEVICE_SUCCESS, payload: res.data.data });
        }
      })
      .catch((error) => {
        dispatch({ type: GET_ALL_DEVICE_ERROR, payload: error });
      });
  };
};

export const getAllDeviceById = (id) => {
  debugger
  return (dispatch) => {
    axios
      .get(getDeviceById(id))
      .then((res) => {
        if (res) {
          debugger
          // dispatch({ type: GET_ALL_DEVICE_SUCCESS });
          dispatch({ type: GET_ALL_DEVICE_SUCCESS, payload: res.data.data });
        }
      })
      .catch((error) => {
        dispatch({ type: GET_ALL_DEVICE_ERROR, payload: error });
      });
  };
};
