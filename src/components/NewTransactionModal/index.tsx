import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'

import { TransactionsContext } from '../../contexts/TransactionsContext'
import * as S from './styles'

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionsFormInputs = z.infer<typeof newTransactionSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionSchema),
  })

  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction,
  )

  async function handleCreateNewTransactionSubmit(
    data: NewTransactionsFormInputs,
  ) {
    const { category, description, price, type } = data

    createTransaction({ category, description, price, type })

    reset()
  }

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransactionSubmit)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <S.TransactionTypeContainer
                onValueChange={field.onChange}
                value={field.value}
              >
                <S.TransactionTypeButton value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </S.TransactionTypeButton>

                <S.TransactionTypeButton value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </S.TransactionTypeButton>
              </S.TransactionTypeContainer>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
