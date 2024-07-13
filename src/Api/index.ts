import Axios from 'axios'
import config from '../config'

const axiosInstance = Axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*'
  }
})

export default {
  getListOfCurrency() {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(config.api.token.concat(config.api.CURRENCY_CODES.BASE))
        .then((res) => resolve(res.data?.supported_codes))
        .catch((error) => reject(error))
    })
  }
}
