import { useEffect, useState } from 'react'

export enum FetchStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}

const useFetch = (func: () => Promise<any>, effect: any = [], callback?: (data: any) => void) => {
  const [data, setData] = useState<any>(null)
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.Idle)

  useEffect(() => {
    setStatus(FetchStatus.Loading)
    func()
      .then((resData) => {
        setData(resData)
        setStatus(FetchStatus.Success)

        if (callback) {
          callback(resData)
        }
      })
      .catch((err) => {
        console.log(err)
        setStatus(FetchStatus.Error)
      })
      .finally(() => {
        setStatus(FetchStatus.Idle)
      })
  }, [...effect])

  return { data, status }
}

export default useFetch
