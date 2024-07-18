import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TableComponentState {
  authorId: string
  currentPage: number
  deckId: string
  deckName: string
  deckPrivacy: boolean
  favoritedBy: string
  items: number
  maxSliderValue: number
  minSliderValue: number
  name: string
  orderBy: null | string
  sort: string
  
}

const initialState: TableComponentState = {
  authorId: '',
  currentPage: 1,
  deckId: '',
  deckName: '',
  deckPrivacy: false,
  favoritedBy: '',
  items: 5,
  maxSliderValue: 99,
  minSliderValue: 0,
  name: '',
  orderBy: null,
  sort: '',
}

export const decksSlice = createSlice({
  initialState,
  name: 'tableComponentSlice',
  reducers: {
    setAutorId: (state, action: PayloadAction<string>) => {
      state.authorId = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setDeckId: (state, action: PayloadAction<string>) => {
      state.deckId = action.payload
    },
    setDeckName: (state, action: PayloadAction<string>) => {
      state.deckName = action.payload
    },
    setDeckPrivacy: (state, action: PayloadAction<boolean>) => {
      state.deckPrivacy = action.payload
    },
    setFavoritedBy: (state, action: PayloadAction<string>) => {
      state.favoritedBy = action.payload
    },
    setFind: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setItems: (state, action: PayloadAction<number>) => {
      state.items = action.payload
    },
    setMaxSliderValue: (state, action: PayloadAction<number>) => {
      state.maxSliderValue = action.payload
    },
    setMinSliderValue: (state, action: PayloadAction<number>) => {
      state.minSliderValue = action.payload
    },
    setOrderBy: (state, action: PayloadAction<null | string>) => {
      state.orderBy = action.payload
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
  },
})

export const {
  setAutorId,
  setCurrentPage,
  setDeckId,
  setDeckName,
  setDeckPrivacy,
  setFavoritedBy,
  setFind,
  setItems,
  setMaxSliderValue,
  setMinSliderValue,
  setOrderBy,
  setSort,
} = decksSlice.actions
