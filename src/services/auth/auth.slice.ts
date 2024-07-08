import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type MeType = {
  avatar?: string
  created?: string
  email?: string
  id?: string
  isEmailVerified?: boolean
  name?: string
  updated?: string
}

export const authSlice = createSlice({
  initialState: {
    isAuthenticated: false,
    me: {
      avatar: '',
      created: '',
      email: '',
      id: '',
      isEmailVerified: false,
      name: '',
      updated: '',
    },
  },
  name: 'auth',
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },
    setMe: (state, action: PayloadAction<MeType>) => {
      state.me = { ...state.me, ...action.payload }
    },
  },
})

export const { setIsAuthenticated, setMe } = authSlice.actions
