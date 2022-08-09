import styled, { css } from 'styled-components';

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
`;

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
`;

export const ItemsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;
`;

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
};

export const Items = styled.div<ItemsProps>`
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
`;

export const CoffeeList = styled.main`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const CoffeeCard = styled.div`
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
`;

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
`;

export const AddToCart = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    background-color: ${({ theme }) => theme['gray-400']};
    border-radius: 6px;
    padding: 0.5rem 0;
    display: flex;
    align-items: center;

    > button {
      display: flex;
      align-items: center;
      border: none;
      cursor: pointer;
      margin-inline: 0.5rem;
      color: ${({ theme }) => theme['purple-500']};
      background: transparent;
    }
  }

  > button {
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['purple-700']};
    padding: 0.5rem;
    border-radius: 6px;
  }

`;

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
`;
