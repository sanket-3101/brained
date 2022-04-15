import { combineReducers } from "redux";
import ChapterReducer  from "./ChapterReducer";

export default combineReducers({
  chapter: ChapterReducer,

});
