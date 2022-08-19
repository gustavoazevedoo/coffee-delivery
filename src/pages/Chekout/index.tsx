import {
  Bank, CreditCard, CurrencyDollar, MapPinLine, Money,
} from 'phosphor-react';
import { useContext } from 'react';

import { CoffeeCartCard } from '../../components/CoffeeCartCard';
import { CartContext } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/formatPrice';

import {
  ChekoutContainer,
  Title,
  Container,
  Subtitle,
  Form,
  Input,
  PaymentMethod,
  Total,
  StyledButton,
  PaymentButton,
} from './styles';

export function Chekout() {
  const { cartCoffees } = useContext(CartContext);

  const totalCoffeesPrice = Number(cartCoffees.reduce((acc, coffee) => (
    acc + coffee.value * coffee.quantity
  ), 0));
  const deliveryValue = 3.5;
  const totalValue = (totalCoffeesPrice + deliveryValue);

  const formattedTotalCoffeesPrice = formatPrice(totalCoffeesPrice);
  const formattedDeliveryValue = formatPrice(deliveryValue);
  const formattedTotalValue = formatPrice(totalValue);

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

          <Form action="/">
            <Input
              className="cep"
              type="text"
              placeholder="CEP"
            />
            <Input
              className="street"
              type="text"
              placeholder="Rua"
            />
            <Input
              className="number"
              type="text"
              placeholder="Número"
            />
            <Input
              className="complement"
              type="text"
              placeholder="Complemento"
            />
            <Input
              className="bairro"
              type="text"
              placeholder="Bairro"
            />
            <Input
              className="city"
              type="text"
              placeholder="Cidade"
            />
            <Input
              className="uf"
              type="text"
              placeholder="UF"
            />
          </Form>
        </Container>

        <Container>
          <Subtitle>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <strong>Pagamento</strong>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </Subtitle>

          <PaymentMethod>
            <PaymentButton type="button" selected>
              <CreditCard size={16} />
              Cartão de crédito
            </PaymentButton>

            <PaymentButton type="button">
              <Bank size={16} />
              Cartão de débito
            </PaymentButton>

            <PaymentButton type="button">
              <Money size={16} />
              Dinheiro
            </PaymentButton>
          </PaymentMethod>
        </Container>
      </section>

      <section>
        <Title>Cafés selecionados</Title>
        <Container radius>
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

          <StyledButton type="button">
            Confirmar pedido
          </StyledButton>
        </Container>
      </section>
    </ChekoutContainer>
  );
}
