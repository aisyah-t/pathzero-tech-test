import ProjectPanel, { SelectOrAddToCart } from "./ProjectPanel.tsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { displayDollarStringFromCents } from "../utils/functions.ts";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

function MockSelectOrAddToCart() {
  const [isSelected, setIsSelected] = useState(false);
  const [quantity, setQuantity] = useState<number | string>(1);

  return (
    <SelectOrAddToCart
      isSelected={isSelected}
      onSelect={() => setIsSelected(true)}
      quantity={quantity}
      onQuantityChange={(value) => setQuantity(value)}
      onAddToCart={() => setIsSelected(false)}
    />
  );
}

describe("SelectOrAddToCart component", () => {
  const user = userEvent.setup();

  it("renders the SelectOrAddToCart component", async () => {
    const { getByRole } = render(<MockSelectOrAddToCart />);

    const select = getByRole("button", { name: "Select" });
    await user.click(select);

    const addToCartButton = getByRole("button", { name: "Add to cart" });
    expect(addToCartButton).toBeInTheDocument();

    const quantityInput = getByRole("spinbutton");
    expect(quantityInput).toBeInTheDocument();
  });

  it("updates the quantity on user input", async () => {
    const { getByRole } = render(<MockSelectOrAddToCart />);

    const select = getByRole("button", { name: "Select" });
    await user.click(select);

    const quantityInput = getByRole("spinbutton");
    expect(quantityInput).toHaveValue(1);

    await userEvent.clear(quantityInput);
    await userEvent.type(quantityInput, "3");

    expect(quantityInput).toHaveValue(3);
  });
});

describe("ProjectPanel component", () => {
  const mockProject = {
    id: 1,
    name: "Green energy project",
    country: "AU",
    provider: "Green Energy Co",
    cost: 123456,
  };

  const noop = () => null;
  const { getByRole, getByText } = screen;

  it("renders the ProjectPanel component", () => {
    render(
      <ProjectPanel
        project={mockProject}
        isSelected={false}
        onSelect={noop}
        quantity={1}
        onQuantityChange={noop}
        onAddToCart={noop}
      />
    );

    const name = getByText(mockProject.name);
    const provider = getByText(`Provider: ${mockProject.provider}`);
    const country = getByText(`Country: ${mockProject.country}`);
    const cost = getByText(`${displayDollarStringFromCents(mockProject.cost)}`);
    const selectButton = getByRole("button", { name: "Select" });

    expect(name).toBeInTheDocument();
    expect(provider).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(cost).toBeInTheDocument();
    expect(selectButton).toBeInTheDocument();
  });
});
