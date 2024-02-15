import { createSlice } from "@reduxjs/toolkit";
import { testData } from "../../data/records";
import { getLocalStorageData, setLocalStorageData } from "../../data/storage";

const initialState = {
  // data: getLocalStorageData(),
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
      setLocalStorageData(state.data);
    },
    addProject: (state, action) => {
      const { newProject } = action.payload;
      state.data.push(newProject);
      setLocalStorageData(state.data);
    },
  },
});

export const { addTask, addProject } = dashboardSlice.actions;

export default dashboardSlice.reducer;
