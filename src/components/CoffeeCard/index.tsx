import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {
  AddToCart,
  CoffeeCardContainer,
  Label,
  Price,
  QuantityCoffeesContainer,
} from './styles'

type Coffee = {
  id: number
  img: string
  title: string
  label: string[]
  description: string
  value: number
}

interface CoffeeCartProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCartProps) {
  const [quantity, setQuantity] = useState(1)
  const { addNewCoffee } = useContext(CartContext)

  const formattedCoffeeValue = coffee.value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })

  function handleAddNewCoffee(data: Coffee) {
    const newCoffee = {
      ...data,
      quantity,
    }

    addNewCoffee(newCoffee)
  }

  function handleIncrementQuantity() {
    setQuantity((prevState) => prevState + 1)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1)
    }
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
          <strong>{formattedCoffeeValue}</strong>
        </Price>

        <AddToCart>
          <QuantityCoffeesContainer>
            <button type="button" onClick={handleDecrementQuantity}>
              <Minus />
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={handleIncrementQuantity}>
              <Plus />
            </button>
          </QuantityCoffeesContainer>
          <button type="button" onClick={() => handleAddNewCoffee(coffee)}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddToCart>
      </footer>
    </CoffeeCardContainer>
  )
}
