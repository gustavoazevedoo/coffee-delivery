import styled from 'styled-components';

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;

  .price {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${({ theme }) => theme['gray-700']};
  }

  .info {
    display: flex;
    gap: 1.25rem;

    img {
      max-width: 64px;
    }

    strong {
      font-size: 1rem;
      line-height: 1.3;
      color: ${({ theme }) => theme['gray-800']};
      font-weight: normal;
    }
  }
`;

export const RemoveFromCart = styled.div`
  display: flex;
  margin-top: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    color: ${({ theme }) => theme['gray-700']};
    text-transform: uppercase;
    background: ${({ theme }) => theme['gray-400']};
    padding: 0.5rem;
    border-radius: 6px;
    margin-left: 8px;

    &:hover {
      color: ${({ theme }) => theme['gray-800']};
      background: ${({ theme }) => theme['gray-500']};
    }

    > svg {
      color: ${({ theme }) => theme['purple-500']};
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme['gray-400']};
  margin-block: 1.5rem;
  height: 1px;
`;

export const QuantityCoffeesContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-400']};
  border-radius: 6px;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme['gray-900']};

  > button {
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    margin-inline: 0.5rem;
    color: ${({ theme }) => theme['purple-500']};
    background: transparent;

    transition: color 200ms linear;

    &:hover {
      color: ${({ theme }) => theme['purple-700']};
    }
  }
`;
