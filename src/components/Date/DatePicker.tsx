import React, { InputHTMLAttributes } from 'react'
import './styles.css'

const DatePicker: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const today = new Date().toISOString().split('T')[0]

  return (
    <input
      type="date"
      className={'container date-picker ' + props.className}
      max={today}
      {...props}
    />
  )
}

export default DatePicker
