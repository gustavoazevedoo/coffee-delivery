import {
  Coffee, Minus, Package, Plus, ShoppingCart, Timer,
} from 'phosphor-react';

import { coffees } from '../../utils/coffees';
import {
  CoffeeList, Hero, Items, ItemsContainer, CoffeeCard, Label, AddToCart, Price, HomeContainer,
} from './styles';

import HeroImage from '../../assets/hero-image.svg';

export function Home() {
  return (
    <HomeContainer>
      <Hero>
        <div className="text-content">
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

      <section>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard>
              <img src={coffee.img} alt={coffee.title} />
              <Label>
                {coffee.label.map((label) => (
                  <span>{label}</span>
                ))}
              </Label>
              <strong>{coffee.title}</strong>
              <p>{coffee.description}</p>

              <footer>
                <Price>
                  <span>R$</span>
                  <strong>{coffee.value}</strong>
                </Price>

                <AddToCart>
                  <div>
                    <button type="button">
                      <Minus />
                    </button>
                    <span>1</span>
                    <button type="button">
                      <Plus />
                    </button>
                  </div>
                  <button type="button">
                    <ShoppingCart size={22} weight="fill" />
                  </button>
                </AddToCart>
              </footer>
            </CoffeeCard>
          ))}
        </CoffeeList>
      </section>
    </HomeContainer>
  );
}
