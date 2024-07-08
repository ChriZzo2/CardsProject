import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TableComponentState {
  sort: string
  items: number
  currentPage: number
  orderBy: string | null
  minSliderValue: number
  maxSliderValue: number
  name: string
  authorId: string
}

const initialState: TableComponentState = {
  sort: '',
  items: 5,
  currentPage: 1,
  orderBy: null,
  minSliderValue: 1,
  maxSliderValue: 99,
  name: '',
  authorId: '',
}

const slice = createSlice({
  name: 'tableComponentSlice',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
    setItems: (state, action: PayloadAction<number>) => {
      state.items = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setOrderBy: (state, action: PayloadAction<string | null>) => {
      state.orderBy = action.payload
    },
    setMinSliderValue: (state, action: PayloadAction<number>) => {
      state.minSliderValue = action.payload
    },
    setMaxSliderValue: (state, action: PayloadAction<number>) => {
      state.maxSliderValue = action.payload
    },
    setFind: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setAutorId: (state, action: PayloadAction<string>) => {
      state.authorId = action.payload;
    }
  },
})

export const tableComponentSliceReducer = slice.reducer
export const {
  setCurrentPage,
  setFind,
  setItems,
  setMaxSliderValue,
  setMinSliderValue,
  setOrderBy,
  setSort,
  setAutorId,
} = slice.actions
