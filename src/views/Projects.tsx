import { useContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/data";
import { ProjectPanel } from "../components";
import useSWR from "swr";
import { ProjectsContext } from "../context/ProjectsContext";
import { loadProjects } from "../context/actions";
import { ProjectsResponse } from "../utils/data";
import { Project } from "../context/types";

function Projects() {
  const [isSelected, setIsSelected] = useState(false);
  // TODO: Replace local state for quantity with state from Context
  // When setting selected set Context for cart at the same time.
  const [quantity, setQuantity] = useState<number | string>(1);

  const { state, dispatch } = useContext(ProjectsContext);

  const { data, error, isLoading } = useSWR<
    ProjectsResponse[] | undefined,
    string
  >("http://localhost:3000/projects", fetchDataFromAPI);

  useEffect(() => {
    if (data) {
      const projects: Project[] = data.map(
        ({ id, name, provider_name, country_code, unit_cost_cents_aud }) => ({
          id,
          name,
          provider: provider_name,
          country: country_code,
          cost: unit_cost_cents_aud,
        })
      );
      dispatch(loadProjects(projects));
    }
  }, [data, dispatch]);

  if (error) {
    return <div>Oops! Something went wrong.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { projects } = state;

  return (
    <section className="container align-center">
      <h1 className="h2">Green Energy Projects</h1>
      <div className="col">
        {projects.map((project) => (
          <ProjectPanel
            project={project}
            isSelected={isSelected}
            onSelect={() => {
              setIsSelected(true);
            }}
            key={project.id}
            quantity={quantity}
            onQuantityChange={(value) => {
              setQuantity(value);
            }}
            onAddToCart={() => {
              setIsSelected(false);
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
