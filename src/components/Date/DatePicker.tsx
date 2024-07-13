import React, { InputHTMLAttributes } from 'react'
import './styles.css'

const DatePicker: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input type="date" className={'container ' + props.className} {...props} />
}

export default DatePicker
