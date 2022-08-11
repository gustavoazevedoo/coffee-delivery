import styled, { css } from 'styled-components';

export const SuccessContainer = styled.div`
  > div {
    display: flex;
    gap: 6.375rem;
  }

  padding: 5rem 0;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  line-height: 1.3;
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme['yellow-700']};
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['gray-800']};
  line-height: 1.3;

  margin-top: 0.25rem;
`;

export const OrderInfos = styled.div`
  flex: 1;
  margin-top: 2.5rem;

  padding: 2.5rem;
  border-radius: 6px 36px;

  border: 1px solid transparent;

  background: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) padding-box padding-box, linear-gradient(to right, rgb(219, 172, 44), rgb(128, 71, 248)) border-box border-box;
`;

interface InfoProps {
  variant: string
}

const colorVariants: any = {
  orange: css`
    background: ${({ theme }) => theme['yellow-700']};
  `,
  yellow: css`
    background: ${({ theme }) => theme['yellow-500']};
  `,
  purple: css`
    background: ${({ theme }) => theme['purple-500']};
  `,
};

export const Info = styled.div<InfoProps>`
  & + & {
    margin-top: 2rem;
  }

  display: flex;
  align-items: center;
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

  & > p {
    color: ${({ theme }) => theme['gray-700']};
    font-size: 1rem;
    line-height: 1.3;

    strong {
      display: block;
    }
  }
`;
