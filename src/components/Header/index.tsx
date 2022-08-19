import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { HeaderContainer, Location, Cart } from './styles';

import LogoCoffeDelivery from '../../assets/logo-coffe-delivery.svg';
import { CartContext } from '../../contexts/CartContext';

export function Header() {
  const { cartLength } = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoCoffeDelivery} alt="" />
      </NavLink>

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>São José, SC</span>
        </Location>

        <NavLink to="/chekout">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
            {cartLength > 0 && (
              <span>{cartLength}</span>
            )}
          </Cart>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
