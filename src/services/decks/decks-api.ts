import { baseApi } from '@/services/base-api'

import { DeckPostParams, DeckType, DecksParamsType, DecksType } from './decks-api.type'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createDecks: builder.mutation<DeckType, DeckPostParams>({
      query: params => {
        return {
          body: params,
          method: 'POST',
          url: 'v1/decks',
        }
      },
    }),
    getDecks: builder.query<DecksType, DecksParamsType>({
      query: params => {
        return { params: params ?? {}, url: 'v2/decks' }
      },
    }),
    deletedDecks: builder.mutation<void, {id: string}>({
      query: (params) => {
        return {
          body: params,
          method: 'DELETE',
          url: `v1/decks/${params.id}`,
        }
      }
    })
  }),
})

export const { useCreateDecksMutation, useGetDecksQuery, useDeletedDecksMutation } = decksApi
