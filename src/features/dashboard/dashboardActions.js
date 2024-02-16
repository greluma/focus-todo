import { v4 as uniqueId } from "uuid";

export async function addProjectAction({ request }) {
  const formData = await request.formData();
  const newProject = {
    projectName: formData.get("name"),
    id: uniqueId(),
    color: formData.get("color"),
    projectTime: 0,
    tasks: [],
  };
  // TODO: Hacer que el input name se limpie al añadir un nuevo proyecto
  return newProject;
}
