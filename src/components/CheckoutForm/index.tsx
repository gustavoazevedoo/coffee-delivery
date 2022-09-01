import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Form, FormGroup, Input } from './styles'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { PaymentMethodType } from '../../pages/Chekout'

interface CheckoutFormProps {
  paymentMethod: PaymentMethodType
}

export function CheckoutForm({ paymentMethod }: CheckoutFormProps) {
  const { emptyCart } = useContext(CartContext)
  const navigate = useNavigate()

  interface ChekoutOrderFormData {
    cep: string
    city: string
    complement: string
    district: string
    number: string
    street: string
    uf: string
  }

  const schema = yup
    .object({
      cep: yup.string().required('Campo "CEP" é obrigatório'),
      city: yup.string().required('Campo "Cidade" é obrigatório'),
      complement: yup.string().required('Campo "Complemento" é obrigatório'),
      district: yup.string().required('Campo "Bairro" é obrigatório'),
      number: yup.string().required('Campo "Número" é obrigatório'),
      street: yup.string().required('Campo "Rua" é obrigatório'),
      uf: yup.string().required('Campo "UF" é obrigatório'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChekoutOrderFormData>({
    resolver: yupResolver(schema),
  })

  function handleChekoutOrder(data: ChekoutOrderFormData) {
    const chekoutOrderData = {
      ...data,
      paymentMethod,
    }

    navigate('/success', { state: chekoutOrderData })

    emptyCart()
  }
  return (
    <Form
      id="payment-form"
      action="/"
      onSubmit={handleSubmit(handleChekoutOrder)}
    >
      <FormGroup className="cep" error={errors.cep}>
        <Input type="text" placeholder="CEP" {...register('cep')} />
        {errors.cep && <small>{errors.cep.message}</small>}
      </FormGroup>

      <FormGroup className="street" error={errors.street}>
        <Input type="text" placeholder="Rua" {...register('street')} />
        {errors.street && <small>{errors.street.message}</small>}
      </FormGroup>

      <FormGroup className="number" error={errors.number}>
        <Input type="text" placeholder="Número" {...register('number')} />
        {errors.number && <small>{errors.number.message}</small>}
      </FormGroup>

      <FormGroup className="complement" error={errors.complement}>
        <Input
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
        {errors.complement && <small>{errors.complement.message}</small>}
      </FormGroup>

      <FormGroup className="district" error={errors.district}>
        <Input type="text" placeholder="Bairro" {...register('district')} />
        {errors.district && <small>{errors.district.message}</small>}
      </FormGroup>

      <FormGroup className="city" error={errors.city}>
        <Input type="text" placeholder="Cidade" {...register('city')} />
        {errors.city && <small>{errors.city.message}</small>}
      </FormGroup>

      <FormGroup className="uf" error={errors.uf}>
        <Input type="text" placeholder="UF" {...register('uf')} />
        {errors.uf && <small>{errors.uf.message}</small>}
      </FormGroup>
    </Form>
  )
}
