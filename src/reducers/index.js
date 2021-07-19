import { combineReducers } from "redux";

import hueReducer from "./hueReducer";

const rootReducer = combineReducers({
  hue: hueReducer,
});

export default rootReducer;
