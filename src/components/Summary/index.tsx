import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'

import * as S from './styles'

export function Summary() {
  const { 'green-300': green300, 'red-300': red300, white } = useTheme()

  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={green300} />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas </span>
          <ArrowCircleDown size={32} color={red300} />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={white} />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}
