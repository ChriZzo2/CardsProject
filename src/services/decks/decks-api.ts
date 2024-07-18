import { baseApi } from '@/services/base-api'

import {
  CreateCard,
  CreateCardParamsType,
  DeckPostParams,
  DeckType,
  DecksParamsType,
  DecksPatchParams,
  DecksType,
} from './decks-api.type'

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
      invalidatesTags: ['Decks'],
    }),
    deletedDecks: builder.mutation<void, { id: string }>({
      query: params => {
        return {
          body: params,
          method: 'DELETE',
          url: `v1/decks/${params.id}`,
        }
      },
      invalidatesTags: ['Decks'],
    }),
    getDecks: builder.query<DecksType, DecksParamsType>({
      query: params => {
        return { params: params ?? {}, url: 'v2/decks' }
      },
      providesTags: ['Decks'],
    }),
    updateDeck: builder.mutation<DeckType, DecksPatchParams>({
      query: params => ({
        body: params.params,
        method: 'PATCH',
        url: `v1/decks/${params.id}`,
      }),
      invalidatesTags: ['Decks'],
    }),
    createCard: builder.mutation<CreateCard, CreateCardParamsType>({
      query: params => ({
        body: params,
        method: 'POST',
        url: 'v1/cards',
      })
    })
  }),
})

export const {
  useCreateDecksMutation,
  useDeletedDecksMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
  useCreateCardMutation,
} = decksApi
