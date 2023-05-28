import { displayDollarStringFromCents } from "../utils/functions";
import { Project } from "../context/types";
import "./ProjectsPanel.scss";

interface SelectOrAddToCartProps {
  isSelected: boolean;
  onSelect(): void;
  id?: string;
  quantity: number | string;
  onQuantityChange(value: number | string): void;
  onAddToCart(): void;
}

export function SelectOrAddToCart({
  isSelected,
  onSelect,
  id,
  quantity,
  onQuantityChange,
  onAddToCart,
}: SelectOrAddToCartProps) {
  return (
    <>
      {isSelected ? (
        <div className="add-to-cart">
          <input
            type="number"
            id={id}
            value={quantity}
            onChange={(event) => {
              const newQuantity = parseInt(event.target.value);

              const isValidNumber =
                typeof newQuantity === "number" && isFinite(newQuantity);

              if (isValidNumber) {
                onQuantityChange(newQuantity);
              } else {
                onQuantityChange("");
              }
            }}
          />
          <button className="button-primary button-large" onClick={onAddToCart}>
            Add to cart
          </button>
        </div>
      ) : (
        <button className="button-primary button-large" onClick={onSelect}>
          Select
        </button>
      )}
    </>
  );
}

interface ProjectPanelProps extends SelectOrAddToCartProps {
  project: Project;
}

function ProjectPanel({
  project,
  isSelected,
  onSelect,
  id,
  quantity,
  onQuantityChange,
  onAddToCart,
}: ProjectPanelProps) {
  const { name, cost, provider, country } = project;

  return (
    <div className="pricing-table row centre col">
      <div className="col col-sm-6">
        <div className="package">
          <p className="package-name">{name}</p>
          <hr />

          <p className="price">{displayDollarStringFromCents(cost)}</p>
          <p className="disclaimer">per unit</p>
          <hr />

          <ul className="features">
            <li>Provider: {provider}</li>
            <li>Country: {country}</li>
          </ul>
          <SelectOrAddToCart
            isSelected={isSelected}
            onSelect={onSelect}
            quantity={quantity}
            onQuantityChange={onQuantityChange}
            onAddToCart={onAddToCart}
            id={id}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectPanel;
