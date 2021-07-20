import { combineReducers } from "redux";

import roomsReducer from "./roomsReducer";

const rootReducer = combineReducers({
  rooms: roomsReducer,
});

export default rootReducer;
