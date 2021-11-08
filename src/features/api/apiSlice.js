import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8080/api/v1' }),
  tagTypes: ['Condenser'],
  endpoints: (builder) => ({
    getCondensers: builder.query({
      query: () => '/condenser',
      providesTags: (result = [], error, arg) => [
        'Condenser',
        ...result.map(({ condenserId }) => ({ type: 'Condenser', condenserId})),
      ],
    }),
    getCondenser: builder.query({
      query: (condenserId) => `/condenser/${condenserId}`,
      providesTags: (result, error, arg) => [{ type: 'Condenser', id: arg }],
    }),
    addNewCondenser: builder.mutation({
      query: (initialCondenser) => ({
        url: '/condenser',
        method: 'POST',
        body: initialCondenser,
      }),
      invalidatesTags: ['Condenser'],
    }),
    editCondenser: builder.mutation({
      query: (condenser) => ({
        url: `condenser/${condenser.condenserId}`,
        method: 'PATCH',
        body: condenser,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Condenser', id: arg.condenserId}],
    }),
  }),
})

export const {
  useGetCondensersQuery,
  useGetCondenserQuery,
  useAddNewCondenserMutation,
  useEditCondenserMutation,
} = apiSlice