import React, { InputHTMLAttributes } from 'react'
import './styles.css'

const DatePicker: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input {...props} type="date" className={'container ' + props.className} />
}

export default DatePicker
