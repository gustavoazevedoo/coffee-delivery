import { Minus, Plus } from 'phosphor-react';
import { QuantityCoffeesContainer } from './styles';

export function QuantityCoffees() {
  return (
    <QuantityCoffeesContainer>
      <button type="button">
        <Minus />
      </button>
      <span>1</span>
      <button type="button">
        <Plus />
      </button>
    </QuantityCoffeesContainer>

  );
}
