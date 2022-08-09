import {
  Coffee, Package, ShoppingCart, Timer,
} from 'phosphor-react';

import {
  CoffeList,
  Hero, HomeContainer, Items, ItemsContainer,
} from './styles';

import HeroImage from '../../assets/hero-image.svg';

export function Home() {
  return (
    <HomeContainer>
      <Hero>
        <div>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <ItemsContainer>
            <Items variant="orange">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </Items>
            <Items variant="gray">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Items>
            <Items variant="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Items>
            <Items variant="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Items>
          </ItemsContainer>
        </div>
        <img src={HeroImage} alt="" />
      </Hero>

      <CoffeList>
        <h2>Nossos cafés</h2>

      </CoffeList>
    </HomeContainer>
  );
}
