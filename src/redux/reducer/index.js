import { combineReducers } from "redux";
import ChapterReducer  from "./ChapterReducer";
import DeviceReducer from "./DeviceReducer";

export default combineReducers({
  chapter: ChapterReducer,
  device:DeviceReducer
});
