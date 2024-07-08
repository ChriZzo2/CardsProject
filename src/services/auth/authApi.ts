import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  authApi,
  LoginArgt,
  LoginResponse,
  SignUpType,
  SingUpResponseType,
} from './authApiType'

export const authSliceApi = createApi({
  reducerPath: 'authSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es/',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => ({
    getMe: builder.query<authApi, void>({
      query: () => {
        return { url: 'v1/auth/me' }
      },
    }),
    login: builder.mutation<LoginResponse, LoginArgt>({
      query: params => ({
        url: 'v1/auth/login',
        method: 'POST',
        body: params,
      }),
    }),
    signUp: builder.mutation<SingUpResponseType, SignUpType>({
      query: params => ({
        url: 'v1/auth/sign-up',
        method: 'POST',
        body: params,
      }),
    }),
  }),
})

export const { useGetMeQuery, useLoginMutation } = authSliceApi
