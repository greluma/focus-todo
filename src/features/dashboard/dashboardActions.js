import { v4 as uniqueId } from "uuid";
import callToast from "../../utils/callToast";

export async function addProjectAction({ request }) {
  const formData = await request.formData();
  const newProject = {
    projectName: formData.get("name"),
    id: uniqueId(),
    color: formData.get("color"),
    projectTime: 0,
    tasks: [],
  };
  callToast("Proyecto añadido", "success");
  // TODO: Hacer que el input name se limpie
  return newProject;
}
