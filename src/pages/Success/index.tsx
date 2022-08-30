import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Description,
  ImageContainer,
  Info,
  OrderInfos,
  SuccessContainer,
  Title,
} from './styles'
import illustration from '../../assets/illustration.svg'
import { useLocation } from 'react-router-dom'

export function Success() {
  interface Teste {
    street: string
    number: string
    district: string
    city: string
    uf: string
    paymentMethod: 'credit' | 'debit' | 'cash'
  }

  const location = useLocation()

  const { street, number, district, city, uf, paymentMethod } =
    location.state as Teste

  const paymentMethods = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  return (
    <SuccessContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <Description>
        Agora é só aguardar que logo o café chegará até você
      </Description>

      <div>
        <OrderInfos>
          <Info variant="purple">
            <div>
              <MapPin weight="fill" />
            </div>
            <p>
              Entrega em:{' '}
              <strong>
                {street}, {number}
              </strong>
              {district} - {city}, {uf}
            </p>
          </Info>

          <Info variant="yellow">
            <div>
              <Timer weight="fill" />
            </div>
            <p>
              Previsão de entrega
              <strong>20 min - 30 min</strong>
            </p>
          </Info>

          <Info variant="orange">
            <div>
              <CurrencyDollar weight="fill" />
            </div>
            <p>
              Pagamento na entrega
              <strong>{paymentMethods[paymentMethod]}</strong>
            </p>
          </Info>
        </OrderInfos>

        <ImageContainer>
          <img src={illustration} alt="" />
        </ImageContainer>
      </div>
    </SuccessContainer>
  )
}
