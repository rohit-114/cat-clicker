import { configureStore } from "@reduxjs/toolkit";
import { preloadedData } from "../data/catdata";
import catReducer from "../features/catSlice";
import { loadState } from "../localStorage";

export default configureStore({
  reducer: catReducer,
  preloadedState: loadState() || preloadedData,
});
