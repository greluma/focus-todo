import { v4 as uniqueId } from "uuid";

export const testData = [
  {
    projectName: "Sin Proyecto",
    id: uniqueId(),
    color: "#4b543b",
    projectTime: 0,
    tasks: [],
  },
  {
    projectName: "Proyecto 1",
    id: uniqueId(),
    color: "#b4d2ba",
    projectTime: 0,
    tasks: [
      {
        id: uniqueId(),
        taskName: "Proyecto 1 Tarea 1",
        taskDescription: "Descripcion de la tarea 1",
        complete: false,
        taskTime: 30,
      },
      {
        id: uniqueId(),
        taskName: "Proyecto 1 Tarea 2",
        taskDescription: "Descripcion de la tarea 2",
        complete: true,
        taskTime: 10,
      },
      {
        id: uniqueId(),
        taskName: "Test",
        taskDescription: "Test",
        complete: true,
        taskTime: 40,
      },
    ],
  },
  {
    projectName: "Proyecto 2",
    id: uniqueId(),
    color: "#B57F50",
    projectTime: 0,
    tasks: [
      {
        id: uniqueId(),
        taskName: "Proyecto 2 Tarea 1",
        taskDescription: "Descripcion de la tarea 1",
        complete: false,
        taskTime: 30,
      },
      {
        id: uniqueId(),
        taskName: "Proyecto 2 Tarea 2",
        taskDescription: "Descripcion de la tarea 2",
        complete: true,
        taskTime: 50,
      },
    ],
  },
];
