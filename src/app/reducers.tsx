import { combineReducers } from "@reduxjs/toolkit";
// import GeonameApiSlice from "../table/tableSlice";
import dataSlice from "../table/tableSlice";

const rootReducer = combineReducers({
  data: dataSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
