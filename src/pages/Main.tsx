import React, { ChangeEvent, useContext, useState } from 'react'
import Button from '../components/Button/Button'
import DatePicker from '../components/Date/DatePicker'
import CurrencyDropdown from '../components/Dropdown/CurrencyDropdown'
import Input from '../components/Input/Input'
import CurrencyDropdownContext, { DropdownContext } from '../context/CurrencyDropdownContext'
import './main-styles.css'
import Text from '../components/Text/Text'

interface IOptions {
  targetCurrency: string
  setTargetCurrency: (d: string) => void
  baseCurrency: string
  setBaseCurrency: (d: string) => void
}

const Options = ({
  targetCurrency,
  setTargetCurrency,
  baseCurrency,
  setBaseCurrency
}: IOptions) => {
  const options = useContext(DropdownContext)
  const handleChangeBaseCurrency = (e: ChangeEvent<HTMLSelectElement>) =>
    setBaseCurrency(e.target.value)

  const handleChangeTargetCurrency = (e: ChangeEvent<HTMLSelectElement>) =>
    setTargetCurrency(e.target.value)

  return (
    <div className="currency-select-container">
      <CurrencyDropdown
        value={baseCurrency}
        onChange={handleChangeBaseCurrency}
        options={options}
      />
      <CurrencyDropdown
        value={targetCurrency}
        onChange={handleChangeTargetCurrency}
        options={options}
      />
    </div>
  )
}

const Main = () => {
  const [amount, setAmount] = useState<Number | null>(null)
  const [date, setDate] = useState<string>('')
  const [baseCurrency, setBaseCurrency] = useState<string>('')
  const [targetCurrency, setTargetCurrency] = useState<string>('')

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))

  return (
    <div className="main-container">
      <div className="wrapper">
        <Text className="text-header">Currency Converter</Text>
        <Text></Text>
        <div className="input-container">
          <div>
            <Text>Amount</Text>
            <div className="amount-container">
              <Input type="number" value={amount as any} onChange={handleAmountChange} />
              <Text>{targetCurrency}</Text>
            </div>
          </div>
          <div>
            <Text>Date</Text>
            <DatePicker value={date as any} onChange={handleDate} />
          </div>
        </div>
        <CurrencyDropdownContext>
          <Options
            baseCurrency={baseCurrency}
            setBaseCurrency={setBaseCurrency}
            targetCurrency={targetCurrency}
            setTargetCurrency={setTargetCurrency}
          />
        </CurrencyDropdownContext>
        <div className="btn-container">
          <Button>Convert</Button>
        </div>
      </div>
    </div>
  )
}

export default Main
