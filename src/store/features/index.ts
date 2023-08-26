import { combineReducers } from "@reduxjs/toolkit";
import formFeature from "./formFeatures";

const rootReducer = combineReducers({
  formFeature,
});

export default rootReducer;
