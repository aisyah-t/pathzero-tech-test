import { ReactNode, createContext, useReducer } from "react";
import { Cart, StateReducer } from "./types";
import { Project } from "./types";

interface ProjectsState {
  projects: Project[];
  cart: Cart[];
}

const initialState = {
  projects: [],
  cart: [],
};

export enum ProjectsActions {
  LoadProjects,
  SetCart,
}

export type ProjectsAction =
  | { type: ProjectsActions.LoadProjects; payload: Project[] }
  | { type: ProjectsActions.SetCart; payload: Cart[] };

function reducer(state: ProjectsState, action: ProjectsAction): ProjectsState {
  switch (action.type) {
    case ProjectsActions.LoadProjects:
      return { ...state, projects: action.payload };
    case ProjectsActions.SetCart:
      return { ...state, cart: action.payload };
  }
}

export const ProjectsContext = createContext<
  StateReducer<ProjectsState, ProjectsAction>
>({
  state: initialState,
  dispatch: () => {
    console.error(
      "A bad dispatch was just made. Make sure this action is done from within a Projects Provider`"
    );
  },
});

interface ProjectsProviderProps {
  children: ReactNode;
}

export function ProjectsProvider({ children }: ProjectsProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProjectsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
}
