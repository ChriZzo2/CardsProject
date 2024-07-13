export interface Author {
  id: string
  name: string
}

export interface Item {
  isFavorite: boolean
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export interface Pagination {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export interface DecksType {
  items: Item[]
  pagination: Pagination
}
export interface DeckType {
  id: number
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export interface DeckPostParams {
  cover?: string
  name: string
  isPrivate: boolean
}

export interface DecksParamsType {
  orderBy: null | string
  minCardsCount: number
  maxCardsCount: number
  name: string
  authorId?: string
  favoritedBy?: string
  currentPage: number
  itemsPerPage: number
}
