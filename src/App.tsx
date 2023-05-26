import "./App.css";
import { useEffect, useState } from "react";

async function fetchProjects() {
  const response = await fetch("http://localhost:3000/api/projects");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const jsonData = await response.json();

  return jsonData;
}

interface MockData {
  id: string;
  columnName: string;
}

function App() {
  const [data, setData] = useState<MockData[]>([]);

  console.log(fetchProjects());

  useEffect(() => {
    setData([{ id: "test", columnName: "test" }]);
  }, []);

  return (
    <div>
      <h1>Data from SQLite database:</h1>
      <ul>
        {data.map((row) => (
          <li key={row.id}>{row.columnName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
