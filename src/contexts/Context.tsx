import { useState, createContext, ReactNode } from 'react'
import { api } from '../libs/axios'

interface TransactionsProvidierProps{
    children: ReactNode
}

interface DataObject{
  toSearch: string,
}

interface ContextType{
  Consume: () => void,
  profiles: string[],
  fetchTransactions: (data:DataObject) => void,
}

export const TransactionsContext = createContext({} as ContextType)

export function TransactionProvidier ({children}: TransactionsProvidierProps) {

    const [profiles, setProfiles] = useState<any>([])

     async function Consume(){  
        const response = await api.get('')
        setProfiles(response.data)
    }

    async function fetchTransactions(data:DataObject) {
        const query = data.toSearch

        const response = await api.get(`/${query}`)
    
        setProfiles([response.data])
      }


    return (
        <TransactionsContext.Provider
          value={{ Consume, profiles, fetchTransactions }}
        >
          {children}
        </TransactionsContext.Provider>
      )
}