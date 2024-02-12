import { createSlice } from "@reduxjs/toolkit";
import { testData } from "../../data/records";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: { data: testData },
  reducers: {
    reducerTest: (state, action) => {
      console.log(state.data);
      console.log("reducerTest", action.payload);
    },
  },
});

export const { reducerTest } = dashboardSlice.actions;

export default dashboardSlice.reducer;
