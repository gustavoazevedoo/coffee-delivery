import {
  Bank, CreditCard, CurrencyDollar, MapPinLine, Money,
} from 'phosphor-react';
import { useContext } from 'react';

import { CoffeeCartCard } from '../../components/CoffeeCartCard';
import { CartContext } from '../../contexts/CartContext';

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
            <CoffeeCartCard coffee={coffee} />
          ))}

          <Total>
            <div className="row">
              <span>Total de items</span>
              <span>R$ 29,70</span>
            </div>
            <div className="row">
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="row">
              <span>Total</span>
              <span>R$ 33,20</span>
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
