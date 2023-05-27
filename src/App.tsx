import ProductPanel from "./components/ProjectPanel";

function App() {
  const mockProject = {
    name: "test",
    price: 17898,
    provider: "yeah",
    country: "AU",
  };

  return (
    <div className="pricing-table row">
      <ProductPanel project={mockProject} />
    </div>
  );
}

export default App;
