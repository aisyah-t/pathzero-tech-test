import { useContext } from "react";
import { ProjectsContext } from "./ProjectsContext";
import { Cart, Project } from "./types";

export function useProjects(): Project[] {
  const { state } = useContext(ProjectsContext);
  return state.projects;
}

export function useCart(): Cart[] {
  const { state } = useContext(ProjectsContext);
  return state.cart;
}
