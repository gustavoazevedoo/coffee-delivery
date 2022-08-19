import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { AddToCart, CoffeeCardContainer, Label, Price, QuantityCoffeesContainer } from "./styles";

type Coffee = {
  id: number,
  img: string,
  title: string,
  label: string[],
  description: string,
  value: number,
};

interface CoffeeCartProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCartProps) {
  const [quantity, setQuantity] = useState(1)
  const { addNewCoffee } = useContext(CartContext);

  function handleAddNewCoffee(coffee: Coffee) {
    const newCoffee = {
      ...coffee,
      quantity,
    }

    addNewCoffee(newCoffee)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.img} alt={coffee.title} />
      <Label>
        {coffee.label.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </Label>
      <strong>{coffee.title}</strong>
      <p>{coffee.description}</p>

      <footer>
        <Price>
          <span>R$</span>
          <strong>{coffee.value}</strong>
        </Price>

        <AddToCart>
          <QuantityCoffeesContainer>
            <button
              type="button"
              onClick={() => setQuantity((prevState) => prevState - 1)}
            >
              <Minus />
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((prevState) => prevState + 1)}
            >
              <Plus />
            </button>
          </QuantityCoffeesContainer>
          <button type="button" onClick={() => handleAddNewCoffee(coffee)}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddToCart>
      </footer>
    </CoffeeCardContainer>
  );
}
