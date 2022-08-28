import {
  createContext,
  ReactNode,
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
}

interface TransactonsProviderProps {
  children: ReactNode
}

const TransactionContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactonsProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/transactions')
      .then((response) => response.json())
      .then((data) => setTransaction(data))
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionContext)
