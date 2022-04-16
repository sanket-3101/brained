import { GET_ALL_DEVICE_SUCCESS, GET_ALL_DEVICE_LOADER } from "../action/types";

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
        loader:false
      }
      
      }
      case GET_ALL_DEVICE_LOADER:{
        return{
          ...state,
          loader:true
        }
    }

    default: {
      return state;
    }
  }
};
