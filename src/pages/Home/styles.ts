import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  section {
    margin-block: 2rem;

    > h2 {
      font-size: 2rem;
      font-weight: 800;
      font-family: 'Baloo 2', cursive;
      line-height: 1.3;
      color: ${({ theme }) => theme['gray-900']};
      margin-bottom: 3.375rem;
    }
  }
`

export const Hero = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 3.5rem;
  padding-block: 6rem;

  .text-content > strong {
    font-size: 3rem;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    color: ${({ theme }) => theme['gray-900']};
  }

  .text-content > p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['gray-800']};
  }
`

export const ItemsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;
`

interface ItemsProps {
  variant: string
}

const colorVariants: any = {
  orange: css`
    background: ${({ theme }) => theme['yellow-700']};
  `,
  gray: css`
    background: ${({ theme }) => theme['gray-700']};
  `,
  yellow: css`
    background: ${({ theme }) => theme['yellow-500']};
  `,
  purple: css`
    background: ${({ theme }) => theme['purple-500']};
  `,
}

export const Item = styled.div<ItemsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.white};
    border-radius: 50%;
    padding: 0.5rem;
    ${({ variant, theme }) => colorVariants[variant] || theme['gray-700']}
  }

  & > span {
    color: ${({ theme }) => theme['gray-700']};
    line-height: 1.3;
    min-width: 12rem;
  }
`

export const CoffeeList = styled.main`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
