import { authSlice } from '@/services/auth/auth.slice'
import { baseApi } from '@/services/base-api'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { decksApi } from './decks/decks-api'
import { decksSlice } from './features/tableComponentSlice/tableComponent.slice'

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(decksApi.middleware),
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [baseApi.reducerPath]: decksApi.reducer,
    [decksSlice.name]: decksSlice.reducer,
  },
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
