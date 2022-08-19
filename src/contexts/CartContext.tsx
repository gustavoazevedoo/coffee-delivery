import {
  createContext, ReactNode, useMemo, useState,
} from 'react';
import { Coffee } from '../utils/coffees';

interface ICartCoffee extends Coffee {
  quantity: number
}

interface CartContextType {
  cartCoffees: ICartCoffee[]
  // eslint-disable-next-line no-unused-vars
  addNewCoffee: (data: ICartCoffee) => void
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}
export function CartProvider({ children }: CartProviderProps) {
  const [cartCoffees, setCartCoffees] = useState<ICartCoffee[]>([]);
  console.log(cartCoffees);

  function addNewCoffee(data: ICartCoffee) {
    const coffeeIndex = cartCoffees.findIndex(((coffee) => coffee.id === data.id));
    const coffeeAlreadyInCart = coffeeIndex !== -1;

    if (coffeeAlreadyInCart) {
      const newCart = cartCoffees.map((coffee) => {
        if (coffee.id === cartCoffees[coffeeIndex].id) {
          return {
            ...cartCoffees[coffeeIndex],
            quantity: data.quantity + cartCoffees[coffeeIndex].quantity,
          };
        }
        return coffee;
      });

      setCartCoffees(newCart);
      return;
    }

    setCartCoffees((prevState) => [...prevState, data]);
  }

  const cartContextValue = useMemo(() => ({
    cartCoffees,
    addNewCoffee,
  }), [cartCoffees]);

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}
