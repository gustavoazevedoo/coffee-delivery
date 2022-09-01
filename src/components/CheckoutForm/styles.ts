import styled, { css } from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-areas:
    'cep . . '
    'street street street'
    'number complement complement'
    'district city uf';

  grid-template-columns: 12.5rem 1fr 3.75rem;

  gap: 1rem 0.75rem;

  position: relative;

  .cep {
    grid-area: cep;
  }

  .street {
    grid-area: street;
  }

  .number {
    grid-area: number;
  }

  .complement {
    grid-area: complement;
  }

  .city {
    grid-area: city;
  }

  .uf {
    grid-area: uf;
  }

  .district {
    grid-area: district;
  }
`

interface FormGroupProps {
  error?: any
}
export const FormGroup = styled.div<FormGroupProps>`
  > small {
    font-size: 0.75rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['red-500']};
  }

  ${({ error }) =>
    error &&
    css`
      input:focus {
        border: 1px solid ${({ theme }) => theme['red-500']};
      }
    `}
`

export const Input = styled.input`
  background: ${({ theme }) => theme['gray-400']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 4px;
  width: 100%;

  padding: 0.75rem;

  font-size: 0.875rem;
  line-height: 1.3;
  color: ${({ theme }) => theme['gray-700']};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme['gray-600']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme['yellow-700']};
  }
`
