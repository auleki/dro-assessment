import axios, { AxiosResponse } from 'axios'

export const getBooks = async (url: string) => {
  const { data } = await axios.get(url)
  return data
}


