import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { decksApi } from './decks/decks-api'
import { setupListeners } from '@reduxjs/toolkit/query'

import { authSliceApi } from './auth/authApi'
import { authSliceReducers } from '../components/auth/authSlice/authSlice'
import { tableComponentSliceReducer } from './features/tableComponentSlice/tableComponent.slice'

const store = configureStore({
  reducer: {
    tableComponent: tableComponentSliceReducer,
    authSlicereducers: authSliceReducers,
    [authSliceApi.reducerPath]: authSliceApi.reducer,
    [decksApi.reducerPath]: decksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(decksApi.middleware).concat(authSliceApi.middleware),
})
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
