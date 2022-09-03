import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactonsProviderProps {
  children: ReactNode
}

const TransactionContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactonsProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const url = new URL('http://localhost:3333/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransaction(data)
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionContext)
