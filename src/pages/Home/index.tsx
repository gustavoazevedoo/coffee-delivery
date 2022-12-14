import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { coffees } from '../../utils/coffees'
import { CoffeeList, Hero, Item, ItemsContainer, HomeContainer } from './styles'

import HeroImage from '../../assets/hero-image.svg'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <Hero>
        <div className="text-content">
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ItemsContainer>
            <Item variant="orange">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </Item>
            <Item variant="gray">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item variant="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item variant="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </ItemsContainer>
        </div>
        <img src={HeroImage} alt="" />
      </Hero>

      <section>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard coffee={coffee} key={coffee.id} />
          ))}
        </CoffeeList>
      </section>
    </HomeContainer>
  )
}
