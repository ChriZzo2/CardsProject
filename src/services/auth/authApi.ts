import { baseApi } from '@/services/base-api'

import { AuthApi, LoginArgt, LoginResponse, SignUpType, SingUpResponseType } from './authApiType'

export const authSliceApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<AuthApi, void>({
      providesTags: ['Me'],
      // @ts-ignore
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          method: 'GET',
          url: 'v1/auth/me',
        })

        return { data: result.data }
      },
    }),
    logOut: builder.mutation<any, void>({
      invalidatesTags: ['Me'],
      query: () => ({
        method: 'POST',
        url: 'v1/auth/logout',
      }),
    }),
    login: builder.mutation<LoginResponse, LoginArgt>({
      invalidatesTags: ['Me'],
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled

        if (!data) {
          return
        }
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)
      },
      query: data => ({
        body: data,
        method: 'POST',
        url: 'v1/auth/login',
      }),
    }),
    signUp: builder.mutation<SingUpResponseType, SignUpType>({
      query: params => ({
        body: params,
        method: 'POST',
        url: 'v1/auth/sign-up',
      }),
    }),
  }),
})

export const { useGetMeQuery, useLogOutMutation, useLoginMutation, useSignUpMutation } =
  authSliceApi
