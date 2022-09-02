import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { useTransactions } from '../../contexts/TransactionsContext'
import { priceFormatter } from '../../utils/formatter'
import * as S from './styles'

export function Summary() {
  const { transactions } = useTransactions()

  const { 'green-300': green300, 'red-300': red300, white } = useTheme()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      }

      if (transaction.type === 'outcome') {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={green300} />
        </header>

        <strong>{priceFormatter(summary.income)}</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas </span>
          <ArrowCircleDown size={32} color={red300} />
        </header>

        <strong>{priceFormatter(summary.outcome)}</strong>
      </S.SummaryCard>

      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={white} />
        </header>

        <strong>{priceFormatter(summary.total)}</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}
