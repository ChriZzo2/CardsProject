import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from 'inspector'
import { DeckPostParams, DecksParamsType, DecksType, DeckType } from './decks-api.type'

export const decksApi = createApi({
  reducerPath: 'decksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es/',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => ({
    getDecks: builder.query<DecksType, DecksParamsType>({
      query: params => {
        return { url: 'v2/decks', params: params ?? {} }
      },
    }),
    createDecks: builder.mutation<DeckType, DeckPostParams>({
      query: params => {
        return {
          url: 'v1/decks',
          method: 'POST',
          body: params,
        }
      },
    }),
  }),
})

export const { useGetDecksQuery, useCreateDecksMutation } = decksApi
