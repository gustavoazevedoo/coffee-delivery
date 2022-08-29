import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-200']};
  padding: 1.25rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 7.5rem;
    aspect-ratio: 1;
    margin-top: -2.5rem;
  }

  > strong {
    color: ${({ theme }) => theme['gray-800']};
    font-weight: bold;
    line-height: 1.3;
    margin-top: 1rem;
    font-size: 1.25rem;
    font-family: 'Baloo 2', cursive;
  }

  > p {
    max-width: 13.5rem;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['gray-600']};
    margin-top: 0.5rem;
  }

  > footer {
    display: flex;
    margin-top: 2rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`

export const Label = styled.div`
  display: flex;
  gap: 0.25rem;

  > span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 1.3;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme['yellow-300']};
    color: ${({ theme }) => theme['yellow-700']};
    border-radius: 100vmax;
    padding: 0.25rem 0.5rem;
  }
`

export const Price = styled.div`
  color: ${({ theme }) => theme['gray-700']};
  line-height: 1.3;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    font-size: 0.875rem;
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const AddToCart = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['purple-700']};
    padding: 0.5rem;
    border-radius: 6px;

    transition: background 200ms linear;

    &:hover {
      background: ${({ theme }) => theme['purple-500']};
    }
  }
`

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
`
