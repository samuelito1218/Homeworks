import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice/counterSlice" 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
