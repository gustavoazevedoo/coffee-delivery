import styled, { css } from 'styled-components'

export const ChekoutContainer = styled.div`
  margin-block: 2.5rem;

  display: grid;
  grid-template-columns: 1fr minmax(min-content, 28rem);
  gap: 2rem;
`

interface ContainerProps {
  radius?: boolean
}

export const Container = styled.div<ContainerProps>`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['gray-200']};
  border-radius: 6px;

  & + & {
    margin-top: 0.75rem;
  }

  ${({ radius }) =>
    radius &&
    css`
      border-radius: 6px 44px;
    `}
`

export const Subtitle = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  strong {
    font-size: 1rem;
    line-height: 1.3;
    font-weight: normal;
    color: ${({ theme }) => theme['gray-800']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['gray-700']};
  }
`

export const Title = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  line-height: 1.3;
  font-weight: bold;
  color: ${({ theme }) => theme['gray-800']};
  margin-bottom: 1rem;
`

export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

interface PaymentButtonProps {
  selected?: boolean
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${({ theme }) => theme['gray-400']};
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme['gray-700']};

  transition: color 200ms linear, background 200ms linear;

  & > svg {
    color: ${({ theme }) => theme['purple-500']};
  }

  &:hover {
    color: ${({ theme }) => theme['gray-800']};
    background: ${({ theme }) => theme['gray-500']};
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${({ theme }) => theme['purple-500']};
      background: ${({ theme }) => theme['purple-300']};

      &:hover {
        border: 1px solid ${({ theme }) => theme['purple-500']};
        background: ${({ theme }) => theme['purple-300']};
      }
    `}
`

export const Total = styled.div`
  color: ${({ theme }) => theme['gray-700']};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      font-size: 0.875rem;
    }

    &:last-child span {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${({ theme }) => theme['gray-800']};
    }
  }
`

export const StyledButton = styled.button`
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 22px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  background-color: ${({ theme }) => theme['yellow-500']};
  border: none;
  border-radius: 6px;

  padding: 0.75rem;
  width: 100%;

  transition: background-color linear 200ms;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-700']};
  }
`

export const NoCoffeeSelected = styled.div`
  > strong {
    font-size: 1.5rem;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    color: ${({ theme }) => theme['gray-900']};
  }

  > p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['gray-700']};
    margin-top: 0.25rem;

    a {
      color: ${({ theme }) => theme['purple-500']};
      text-decoration: none;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme['purple-500']};
        transition: width 150ms ease-in;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`
