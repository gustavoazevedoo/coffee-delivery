import styled from 'styled-components';

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
