import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import {
  Description,
  ImageContainer,
  Info, OrderInfos, SuccessContainer, Title,
} from './styles';
import illustration from '../../assets/illustration.svg';

export function Success() {
  return (
    <SuccessContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <Description>Agora é só aguardar que logo o café chegará até você</Description>

      <div>
        <OrderInfos>
          <Info variant="purple">
            <div>
              <MapPin weight="fill" />
            </div>
            <p>
              Entrega em:
              {' '}
              <strong>Rua João Daniel Martinelli, 102</strong>
              Farrapos - Porto Alegre, RS
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
              <strong>Cartão de crédito</strong>
            </p>
          </Info>
        </OrderInfos>

        <ImageContainer>
          <img src={illustration} alt="" />
        </ImageContainer>
      </div>
    </SuccessContainer>
  );
}
