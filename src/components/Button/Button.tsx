import React, { ButtonHTMLAttributes } from 'react'
import './styles.css'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className={'container-1-btn bg-primary text-secondary ' + props.className} {...props}>
      {props.children}
    </button>
  )
}

export default Button
