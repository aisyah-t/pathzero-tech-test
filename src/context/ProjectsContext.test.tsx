import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { ReactNode, useContext } from "react";
import { ProjectsContext, ProjectsProvider } from "./ProjectsContext";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <ProjectsProvider>{children}</ProjectsProvider>;
}

describe("ProjectsContext", () => {
  test("initial state loads", () => {
    const initialState = {
      projects: [],
      cart: [],
    };
    const { result } = renderHook(() => useContext(ProjectsContext), {
      wrapper: Wrapper,
    });

    expect(result.current.state).toEqual(initialState);
  });
});
