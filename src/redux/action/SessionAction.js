import axios from "axios";
import { POST_SESSION_SUCCESS,  POST_SESSION_LOADER, POST_SESSION_ERROR} from "./types";
import { postSesssion } from "../../Constant/enpoint";
export const setLoader = () => {
  return (dispatch) =>
    dispatch({
      type: POST_SESSION_LOADER,
    });
};

export const postSession = (id) => {
  return (dispatch) => {
    axios
      .get(postSesssion(id))
      .then((res) => {
        dispatch({
          type: POST_SESSION_SUCCESS,
          payload: res,
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
