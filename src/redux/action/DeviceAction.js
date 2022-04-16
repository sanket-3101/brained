import axios from "axios";
import { getDevice } from "../../Constant/enpoint";
import { GET_ALL_DEVICE_SUCCESS, GET_ALL_DEVICE_ERROR } from "./types";

export const getAllDevice = () => {
  return (dispatch) => {
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
