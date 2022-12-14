import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { CoffeeCartCard } from '../../components/CoffeeCartCard'
import { CheckoutForm } from '../../components/CheckoutForm'
import { CartContext } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/formatPrice'

import {
  ChekoutContainer,
  Title,
  Container,
  Subtitle,
  PaymentMethodContainer,
  Total,
  StyledButton,
  PaymentButton,
  NoCoffeeSelected,
} from './styles'

export type PaymentMethodType = 'credit' | 'debit' | 'cash'

export function Chekout() {
  const { cartCoffees } = useContext(CartContext)
  const [currentPaymentMethod, setCurrentPaymentMethod] =
    useState<PaymentMethodType>('credit')

  function handleChangePaymentMethod(paymentMehod: PaymentMethodType) {
    if (currentPaymentMethod !== paymentMehod) {
      setCurrentPaymentMethod(paymentMehod)
    }
  }

  const totalCoffeesPrice = Number(
    cartCoffees.reduce(
      (acc, coffee) => acc + coffee.value * coffee.quantity,
      0,
    ),
  )
  const deliveryValue = 3.5
  const totalValue = totalCoffeesPrice + deliveryValue

  const formattedTotalCoffeesPrice = formatPrice(totalCoffeesPrice)
  const formattedDeliveryValue = formatPrice(deliveryValue)
  const formattedTotalValue = formatPrice(totalValue)

  return (
    <ChekoutContainer>
      <section>
        <Title>Complete seu pedido</Title>

        <Container>
          <Subtitle>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <strong>Endereço de entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Subtitle>

          <CheckoutForm paymentMethod={currentPaymentMethod} />
        </Container>

        <Container>
          <Subtitle>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <strong>Pagamento</strong>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Subtitle>

          <PaymentMethodContainer>
            <PaymentButton
              type="button"
              selected={currentPaymentMethod === 'credit'}
              onClick={() => handleChangePaymentMethod('credit')}
            >
              <CreditCard size={16} />
              Cartão de crédito
            </PaymentButton>

            <PaymentButton
              type="button"
              selected={currentPaymentMethod === 'debit'}
              onClick={() => handleChangePaymentMethod('debit')}
            >
              <Bank size={16} />
              Cartão de débito
            </PaymentButton>

            <PaymentButton
              type="button"
              selected={currentPaymentMethod === 'cash'}
              onClick={() => handleChangePaymentMethod('cash')}
            >
              <Money size={16} />
              Dinheiro
            </PaymentButton>
          </PaymentMethodContainer>
        </Container>
      </section>

      <section>
        <Title>Cafés selecionados</Title>
        <Container radius>
          {cartCoffees.length > 0 && (
            <>
              {cartCoffees.map((coffee) => (
                <CoffeeCartCard key={coffee.id} coffee={coffee} />
              ))}

              <Total>
                <div className="row">
                  <span>Total de items</span>
                  <span>{formattedTotalCoffeesPrice}</span>
                </div>
                <div className="row">
                  <span>Entrega</span>
                  <span>{formattedDeliveryValue}</span>
                </div>
                <div className="row">
                  <span>Total</span>
                  <span>{formattedTotalValue}</span>
                </div>
              </Total>

              <StyledButton type="submit" form="payment-form">
                Confirmar pedido
              </StyledButton>
            </>
          )}
          {cartCoffees.length === 0 && (
            <NoCoffeeSelected>
              <strong>Nenhum café selecionado</strong>
              <p>
                Por favor, click <Link to="/">aqui</Link> e adicione um café ao
                carrinho
              </p>
            </NoCoffeeSelected>
          )}
        </Container>
      </section>
    </ChekoutContainer>
  )
}
