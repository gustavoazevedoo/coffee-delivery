import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, Location, Cart } from './styles';

import LogoCoffeDelivery from '../../assets/logo-coffe-delivery.svg';

export function Header() {
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
            <span>2</span>
          </Cart>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
