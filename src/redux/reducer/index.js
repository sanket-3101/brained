import { combineReducers } from "redux";
import ChapterReducer from "./ChapterReducer";
import DeviceReducer from "./DeviceReducer";
import QuizReducer from "./QuizReducer";
import SessionReducer from "./SessionReducer";
import SubjectReducer from "./SubjectReducer";
import BlinkReducer from "./BlinkReducer";
export default combineReducers({
  chapter: ChapterReducer,
  device: DeviceReducer,
  quiz: QuizReducer,
  session: SessionReducer,
  subject: SubjectReducer,
  blink: BlinkReducer,
});
