import { configureStore } from "@reduxjs/toolkit";
import clockSlice from "../features/clock/clockSlice";
import dashboardSlice from "../features/dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    clock: clockSlice,
    dashboard: dashboardSlice,
  },
});
