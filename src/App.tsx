import { ProjectsProvider } from "./context/ProjectsContext";
import { Projects } from "./views";

function App() {
  return (
    <ProjectsProvider>
      <Projects />
    </ProjectsProvider>
  );
}

export default App;
