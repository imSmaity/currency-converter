import React, { createContext, ReactNode } from 'react'
import Api from '../Api'
import useFetch from '../hooks/useFetch'

interface ICurrencyDropdownContextProps {
  children: ReactNode
}

export const DropdownContext = createContext<Array<Array<string>> | null>(null)

const CurrencyDropdownContext: React.FC<ICurrencyDropdownContextProps> = ({ children }) => {
  const fetchCodes = Api.getListOfCurrency
  const { data } = useFetch(fetchCodes)
  const options = data

  return <DropdownContext.Provider value={options}>{children}</DropdownContext.Provider>
}

export default CurrencyDropdownContext
