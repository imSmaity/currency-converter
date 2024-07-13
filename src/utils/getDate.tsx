const getDate = (inputDate?: string) => {
  const newDate = inputDate ? new Date(inputDate) : new Date()

  const day = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()

  const fullDate = `${year}-${month < 10 ? `0` : ''}${month}-${day < 10 ? `0` : ''}${day}`

  return { fullDate, day, month, year }
}

export default getDate
