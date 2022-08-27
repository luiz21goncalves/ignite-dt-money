import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import * as S from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionContainer>
        <S.TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td>Hamburger</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 59,00
                </S.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionContainer>
    </div>
  )
}
