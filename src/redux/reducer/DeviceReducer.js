import {
  GET_DEVICE_LOADER,
  GET_DEVICE_SUCCESS,
  GET_DEVICE_ERROR,
  GET_ALL_DEVICE_SUCCESS,
  GET_ALL_DEVICE_ERROR,
} from "../action/types";

const INITIAL_STATE = {
  loader: true,
  device: [],
  deviceDetails: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DEVICE_LOADER:
      return {
        ...state,
        loader: true,
      };
    case GET_ALL_DEVICE_SUCCESS:
      return {
        ...state,
        loader: false,
        device: action.payload,
        error: null,
      };
    case GET_ALL_DEVICE_ERROR:
      return {
        ...state,
        loader: false,
        device: action.payload,
        error: action.payload,
      };
    case GET_DEVICE_SUCCESS:
      return {
        ...state,
        loader: false,
        deviceDetails: action.payload,
        error: null,
      };
    case GET_DEVICE_ERROR:
      return {
        ...state,
        loader: false,
        deviceDetails: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
