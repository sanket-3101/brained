import { GET_ALL_DEVICE_SUCCESS, GET_DEVICE_SUCCESS } from "../action/types";

const INITIAL_STATE = {
  loader: false,
  device: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_DEVICE_SUCCESS: {
      return {
        ...state,
        device: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
