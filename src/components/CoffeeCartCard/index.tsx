/* eslint-disable react/no-unused-prop-types */
import { Minus, Plus, Trash } from 'phosphor-react';
import {
  CoffeeCartCardContainer, Divider, QuantityCoffeesContainer, RemoveFromCart,
} from './style';

interface CoffeeCartCardProps {
  coffee: {
    id: number,
    img: string,
    title: string,
    label: string[],
    description: string,
    value: number,
    quantity: number
  }
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  return (
    <>
      <CoffeeCartCardContainer>
        <div className="info">
          <img src={coffee.img} alt="" />
          <div>
            <strong>{coffee.title}</strong>
            <RemoveFromCart>
              <QuantityCoffeesContainer>
                <button type="button">
                  <Minus />
                </button>
                <span>{coffee.quantity}</span>
                <button type="button">
                  <Plus />
                </button>
              </QuantityCoffeesContainer>
              <button
                type="button"
              >
                <Trash size={16} />
                Remover
              </button>
            </RemoveFromCart>
          </div>
        </div>
        <span className="price">{coffee.value}</span>
      </CoffeeCartCardContainer>

      <Divider />
    </>
  );
}
