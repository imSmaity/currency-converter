const config = {
  api: {
    baseURL: process.env.REACT_APP_API_URL,
    token: process.env.REACT_APP_API_TOKEN || '',
    CURRENCY_CODES: {
      BASE: '/codes'
    }
  }
}

export default config
