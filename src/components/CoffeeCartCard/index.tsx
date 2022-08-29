/* eslint-disable react/no-unused-prop-types */
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import {
  CoffeeCartCardContainer,
  Divider,
  QuantityCoffeesContainer,
  RemoveFromCart,
} from './style'

interface CoffeeCartCardProps {
  coffee: {
    id: number
    img: string
    title: string
    label: string[]
    description: string
    value: number
    quantity: number
  }
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { incrementCoffeeQuantity, decrementCoffeeQuantity, removeCoffee } =
    useContext(CartContext)

  const formattedCoffeeValue = formatPrice(coffee.value)

  function handleIncrementCoffeeQuantity() {
    incrementCoffeeQuantity(coffee.id)
  }

  function handleDecrementCoffeeQuantity() {
    if (coffee.quantity > 1) {
      decrementCoffeeQuantity(coffee.id)
    }
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee.id)
  }

  return (
    <>
      <CoffeeCartCardContainer>
        <div className="info">
          <img src={coffee.img} alt="" />
          <div>
            <strong>{coffee.title}</strong>
            <RemoveFromCart>
              <QuantityCoffeesContainer>
                <button type="button" onClick={handleDecrementCoffeeQuantity}>
                  <Minus />
                </button>
                <span>{coffee.quantity}</span>
                <button type="button" onClick={handleIncrementCoffeeQuantity}>
                  <Plus />
                </button>
              </QuantityCoffeesContainer>
              <button type="button" onClick={handleRemoveCoffee}>
                <Trash size={16} />
                Remover
              </button>
            </RemoveFromCart>
          </div>
        </div>
        <span className="price">{formattedCoffeeValue}</span>
      </CoffeeCartCardContainer>

      <Divider />
    </>
  )
}
