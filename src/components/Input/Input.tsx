import React, { InputHTMLAttributes } from 'react'
import './styles.css'

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className="container" {...props} />
}

export default Input
