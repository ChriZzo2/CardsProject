import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TableComponentState {
  favoritedBy:string
  authorId: string
  currentPage: number
  items: number
  maxSliderValue: number
  minSliderValue: number
  name: string
  orderBy: null | string
  sort: string
}

const initialState: TableComponentState = {
  favoritedBy: '',
  authorId: '',
  currentPage: 1,
  items: 5,
  maxSliderValue: 99,
  minSliderValue: 1,
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
    setFavoritedBy: (state, action: PayloadAction<string>) => {
      state.favoritedBy = action.payload
    },
  },
})

export const tableComponentSliceReducer = decksSlice.reducer
export const {
  setAutorId,
  setCurrentPage,
  setFind,
  setItems,
  setMaxSliderValue,
  setMinSliderValue,
  setOrderBy,
  setSort,
  setFavoritedBy,
} = decksSlice.actions
