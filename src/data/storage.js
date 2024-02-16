import { v4 as uniqueId } from "uuid";

export const basicData = [
  {
    projectName: "Sin Proyecto",
    id: uniqueId(),
    color: "#4b543b",
    projectTime: 0,
    tasks: [],
  },
];

export function getLocalStorageData() {
  const data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(data);
  }
  return basicData;
}

export function setLocalStorageData(data) {
  localStorage.setItem("data", JSON.stringify(data));
}
