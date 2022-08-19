/* eslint-disable no-unused-vars */
import {
  createContext, ReactNode, useCallback, useMemo, useState,
} from 'react';
import { Coffee } from '../utils/coffees';

interface ICartCoffee extends Coffee {
  quantity: number
}

interface CartContextType {
  cartCoffees: ICartCoffee[]
  cartLength: number
  addNewCoffee: (data: ICartCoffee) => void
  incrementCoffeeQuantity: (coffeeId: number) => void
  decrementCoffeeQuantity: (coffeeId: number) => void
  removeCoffee: (coffeeId: number) => void
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}
export function CartProvider({ children }: CartProviderProps) {
  const [cartCoffees, setCartCoffees] = useState<ICartCoffee[]>([]);
  const cartLength = cartCoffees.length;

  const addNewCoffee = useCallback((data: ICartCoffee) => {
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
  }, [cartCoffees]);

  const incrementCoffeeQuantity = useCallback((coffeeId: number) => {
    const selectedCoffee = cartCoffees.find((coffee) => coffee.id === coffeeId);

    if (selectedCoffee) {
      const newCart = cartCoffees.map((coffee) => {
        if (coffee.id === selectedCoffee?.id) {
          return {
            ...selectedCoffee,
            quantity: selectedCoffee.quantity + 1,
          };
        }
        return coffee;
      });

      setCartCoffees(newCart);
    }
  }, [cartCoffees]);

  const decrementCoffeeQuantity = useCallback((coffeeId: number) => {
    const selectedCoffee = cartCoffees.find((coffee) => coffee.id === coffeeId);

    if (selectedCoffee) {
      const newCart = cartCoffees.map((coffee) => {
        if (coffee.id === selectedCoffee?.id) {
          return {
            ...selectedCoffee,
            quantity: selectedCoffee.quantity - 1,
          };
        }
        return coffee;
      });

      setCartCoffees(newCart);
    }
  }, [cartCoffees]);

  const removeCoffee = useCallback((coffeeId: number) => {
    const filteredCartCoffees = cartCoffees.filter((coffee) => coffee.id !== coffeeId);

    setCartCoffees(filteredCartCoffees);
  }, [cartCoffees]);

  const cartContextValue = useMemo(() => ({
    cartCoffees,
    cartLength,
    addNewCoffee,
    incrementCoffeeQuantity,
    decrementCoffeeQuantity,
    removeCoffee,
  }), [
    cartCoffees,
    cartLength,
    addNewCoffee,
    incrementCoffeeQuantity,
    decrementCoffeeQuantity,
    removeCoffee,
  ]);

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}
