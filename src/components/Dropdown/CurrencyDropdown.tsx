import React, { SelectHTMLAttributes } from 'react'
import getCountryFlagUrl from '../../utils/getCountryFlagUrl'
import './styles.css'

interface ICurrencyDropdown {
  options: Array<Array<string>> | null
}

const CurrencyDropdown: React.FC<SelectHTMLAttributes<HTMLSelectElement> & ICurrencyDropdown> = (
  props
) => {
  return (
    <div className="container-2">
      <img src={getCountryFlagUrl(String(props.value || 'INR'))} alt="Flag" />
      <select className={'select-container ' + props.className} {...props}>
        <option value="">Select currency</option>
        {props.options?.map((option, idx) => (
          <option value={option[0]} key={idx}>
            {`${option[0]} - ${option[1]}`}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CurrencyDropdown
