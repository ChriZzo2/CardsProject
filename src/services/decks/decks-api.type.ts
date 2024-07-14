export interface Author {
  id: string
  name: string
}

export interface Item {
  author: Author
  cardsCount: number
  cover: string
  created: string
  id: string
  isFavorite: boolean
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export interface Pagination {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export interface DecksType {
  items: Item[]
  pagination: Pagination
}
export interface DeckType {
  cardsCount: number
  cover: string
  created: string
  id: number
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export interface DecksPatchParams {
  id: string
  params: {
    cover?: string
    isPrivate: boolean
    name: string
  }
}
export interface DeckPostParams {
  cover?: string
  isPrivate: boolean
  name: string
}

export interface DecksParamsType {
  authorId?: string
  currentPage: number
  favoritedBy?: string
  itemsPerPage: number
  maxCardsCount: number
  minCardsCount: number
  name: string
  orderBy: null | string
}
