import axios from 'axios'

export const getBooks = async (url: string) => {
  const { data } = await axios.get(url)
  return data
}

// since specific url no need to make reusable
export const getCharacters = async (url: string) => {
  const { data } = await axios.get(url)
  return data
}
