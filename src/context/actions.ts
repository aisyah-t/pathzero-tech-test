import { ProjectsAction, ProjectsActions } from "./ProjectsContext";
import { Cart, Project } from "./types";

export function loadProjects(projects: Project[]): ProjectsAction {
  return { type: ProjectsActions.LoadProjects, payload: projects };
}

export function setCart(cart: Cart[]): ProjectsAction {
  return { type: ProjectsActions.SetCart, payload: cart };
}
