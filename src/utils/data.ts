export interface ProjectsResponse {
  id: number;
  name: string;
  provider_name: string;
  country_code: string;
  unit_cost_cents_aud: number;
}

export async function fetchDataFromAPI(
  input: RequestInfo | URL
): Promise<ProjectsResponse[] | undefined> {
  try {
    const response = await fetch(input);
    const projectsData = await response.json();

    if (response.ok) {
      return projectsData;
    }
  } catch (error) {
    console.error(error);
  }
}
