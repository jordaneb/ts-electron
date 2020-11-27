import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Route, RouterState } from "./types";

const initialState: RouterState = {
  currentRoute: "home",
};

export const router = createSlice({
  name: "router",
  initialState: initialState,
  reducers: {
    changeRoute(state, action: PayloadAction<{ newRoute: Route }>) {
      state.currentRoute = action.payload.newRoute;
    },
  },
});

export const routerActions = {
  changeRoute: router.actions.changeRoute,
};

export const routerReducer = router.reducer;
