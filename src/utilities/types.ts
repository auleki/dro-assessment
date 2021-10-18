export interface IBook {
  name: string
  publisher: string
  url: string
  numberOfPages: number
  authors: []
  mediaType: string
  released: string
  isbn: string
  characters: []
  povCharacters: []
}

export interface IRowProps {
  alignment?: string
  padding?: string
}