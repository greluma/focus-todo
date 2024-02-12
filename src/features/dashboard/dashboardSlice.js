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
    addTask: (state, action) => {
      const { newTask, project } = action.payload;
      state.data.forEach((item) => {
        if (item.projectName === project) {
          item.tasks.push(newTask);
        }
      });
    },
  },
});

export const { addTask } = dashboardSlice.actions;

export default dashboardSlice.reducer;
