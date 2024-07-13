import React from 'react'

const getCountryFlagUrl = (code: string) => {
  const fileName = code[0] + code[1]
  return `https://api.exchangerate-api.com/flag-images/${fileName}.gif`
}

export default getCountryFlagUrl
