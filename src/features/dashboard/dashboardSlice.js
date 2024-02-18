import { createSlice } from "@reduxjs/toolkit";
import { testData } from "../../data/records";

import {
  // basicData,
  // getLocalStorageData,
  setLocalStorageData,
} from "../../data/storage";
import callToast from "../../utils/callToast";

const initialState = {
  // data: getLocalStorageData() || basicData,
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
      callToast("Proyecto Añadido");
    },
    setComplete: (state, action) => {
      const { projectId, taskId } = action.payload;
      const project = state.data.find((project) => project.id === projectId);
      const task = project.tasks.find((task) => task.id === taskId);
      task.complete = !task.complete;
      setLocalStorageData(state.data);
    },
    deleteTask: (state, action) => {
      const { projectId, taskId } = action.payload;
      const project = state.data.find((project) => project.id === projectId);
      project.tasks = project.tasks.filter((task) => task.id !== taskId);
      setLocalStorageData(state.data);
      callToast("Tarea Eliminada");
    },
    editTask: (state, action) => {
      const {
        projectId,
        taskId,
        editedTask: { taskName, taskDescription, complete },
      } = action.payload;
      const project = state.data.find((project) => project.id === projectId);
      const task = project.tasks.find((task) => task.id === taskId);
      task.taskName = taskName;
      task.taskDescription = taskDescription;
      task.complete = complete;
      setLocalStorageData(state.data);
      callToast("Tarea Editada");
    },
  },
});

export const { addTask, addProject, setComplete, deleteTask, editTask } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
