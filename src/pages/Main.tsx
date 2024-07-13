import { ChangeEvent, useContext, useState } from 'react'
import Api from '../Api'
import Button from '../components/Button/Button'
import DatePicker from '../components/Date/DatePicker'
import CurrencyDropdown from '../components/Dropdown/CurrencyDropdown'
import Input from '../components/Input/Input'
import Loading from '../components/Loading/Loading'
import Text from '../components/Text/Text'
import CurrencyDropdownContext, { DropdownContext } from '../context/CurrencyDropdownContext'
import useFetch from '../hooks/useFetch'
import getDate from '../utils/getDate'
import './main-styles.css'

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
  const modifyOptionsList1 = options && options.filter((option) => option[0] !== targetCurrency)
  const modifyOptionsList2 = options && options.filter((option) => option[0] !== baseCurrency)

  const handleChangeBaseCurrency = (e: ChangeEvent<HTMLSelectElement>) =>
    setBaseCurrency(e.target.value)

  const handleChangeTargetCurrency = (e: ChangeEvent<HTMLSelectElement>) =>
    setTargetCurrency(e.target.value)

  const handleSwap = () => {
    setBaseCurrency(targetCurrency)
    setTargetCurrency(baseCurrency)
  }

  return (
    <div className="currency-select-container">
      <CurrencyDropdown
        value={baseCurrency}
        onChange={handleChangeBaseCurrency}
        options={modifyOptionsList1}
      />
      <img
        className="swap-icon"
        src="https://i.ibb.co/dLj9jVx/up-and-down-arrow.png"
        alt="up-and-down-arrow"
        onClick={handleSwap}
      />
      <CurrencyDropdown
        value={targetCurrency}
        onChange={handleChangeTargetCurrency}
        options={modifyOptionsList2}
      />
    </div>
  )
}

const Main = () => {
  const { fullDate, year, month, day } = getDate()

  const [amount, setAmount] = useState<number>(100)
  const [date, setDate] = useState<string>(fullDate)
  const [baseCurrency, setBaseCurrency] = useState<string>('INR')
  const [targetCurrency, setTargetCurrency] = useState<string>('USD')
  const [currencyData, setCurrencyData] = useState({
    baseCurrency,
    targetCurrency,
    year,
    month,
    day,
    amount
  })

  const fetchCurrencyInfo = () => {
    return Api.getCurrencyInfo(
      currencyData.baseCurrency,
      currencyData.year,
      currencyData.month,
      currencyData.day,
      currencyData.amount
    )
  }
  const { data, status } = useFetch(fetchCurrencyInfo, [
    currencyData.baseCurrency,
    currencyData.amount,
    currencyData.day
  ])

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }

  const handleClickConvert = () => {
    const { year, month, day } = getDate(date)
    if (amount && year && month && day && baseCurrency) {
      setCurrencyData({ baseCurrency, targetCurrency, year, month, day, amount })
    }
  }

  const isLoading = status === 'loading'

  return (
    <div className="main-container">
      <div className="wrapper">
        <Text className="text-header">Currency Converter</Text>
        <div className="value-container">
          <Text className="amount">
            {data ? Number(data?.conversion_amounts[currencyData.targetCurrency]).toFixed(4) : '-'}
          </Text>
        </div>
        <div className="input-container">
          <div>
            <Text>Amount</Text>
            <div className="amount-container">
              <Input type="number" value={amount as any} onChange={handleAmountChange} />
              <Text>{baseCurrency}</Text>
            </div>
          </div>
          <div>
            <Text>Date</Text>
            <DatePicker value={date} onChange={handleDate} />
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
          <Button onClick={handleClickConvert} disabled={isLoading}>
            <div className="load-container">
              <div>Convert</div> {isLoading ? <Loading /> : null}
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Main
