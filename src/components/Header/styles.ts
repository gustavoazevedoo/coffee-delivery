import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme['gray-100']};
  padding: 2rem 0;
  position: sticky;
  z-index: 9999;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border-radius: 6px;

  background-color: ${({ theme }) => theme['purple-300']};
  color: ${({ theme }) => theme['purple-700']};

  font-size: 0.875rem;
  line-height: 1.3;
`

export const Cart = styled.div`
  background-color: ${({ theme }) => theme['yellow-300']};
  color: ${({ theme }) => theme['yellow-700']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: relative;

  & > span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    aspect-ratio: 1;
    border-radius: 50%;
    top: -0.5rem;
    right: -0.5rem;
    background-color: ${({ theme }) => theme['yellow-700']};
    font-size: 0.75rem;
    font-weight: bold;
    color: ${({ theme }) => theme.white};
  }
`
