import { createSlice } from "@reduxjs/toolkit";
import { testData } from "../../data/records";
import { setLocalStorageData } from "../../data/storage";
import callToast from "../../utils/callToast";
// TODO: import getLocalStorageData

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
      callToast("Tarea añadida");
    },
    addProject: (state, action) => {
      const { newProject } = action.payload;
      state.data.push(newProject);
      setLocalStorageData(state.data);
      callToast("Proyecto añadido");
    },
  },
});

export const { addTask, addProject } = dashboardSlice.actions;

export default dashboardSlice.reducer;
