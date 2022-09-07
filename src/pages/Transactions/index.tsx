import { useContextSelector } from 'use-context-selector'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionContainer>
        <SearchForm />

        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter(transaction.price)}
                    </S.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionContainer>
    </div>
  )
}
