import { createSlice } from "@reduxjs/toolkit";
import { testData } from "../../data/records";

const initialState = {
  // TODO: el data inicialmente debe ser el localStorage o []
  data: testData,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    reducerTest: (state, action) => {
      console.log(state.data);
      console.log("reducerTest", action.payload);
    },
  },
});

export const { reducerTest } = dashboardSlice.actions;

export default dashboardSlice.reducer;
