import { DASHBOARD_DATA, DASHBOARD_DATA_ERROR, CHANGE_ROUTE_TECH_SUPPORT } from "../Actions/types";

const INITIAL_STATE = {
    loader: false,
    chapter: [],
    chapterDetails : {},

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};
