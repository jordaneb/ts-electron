import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { routerReducer } from "../router/state";

const store = configureStore({
  reducer: combineReducers({
    router: routerReducer,
  }),
});

export default store;
