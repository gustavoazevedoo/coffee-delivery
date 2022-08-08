import { MapPin, ShoppingCart } from 'phosphor-react';
import { HeaderContainer, Location, Cart } from './style';

import LogoCoffeDelivery from '../../assets/logo-coffe-delivery.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeDelivery} alt="" />

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>São José, SC</span>
        </Location>

        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  );
}
