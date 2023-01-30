import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getConfigValue } from '@ijl/cli'
import data from '../AdminData'

const BaseApiUrl = getConfigValue('sugarbun.baseApiUrl')

export const rtkCake = createApi({
    reducerPath: 'rtkCake',
    baseQuery: fetchBaseQuery({
        baseUrl: BaseApiUrl + '/menu/',
    }),
    endpoints: (builder) => ({
        getCakeitems: builder.query({
            query: () => `cakeitems`,
        }),
        constructorSubmit: builder.mutation({
            query: (data) => ({
                url: 'submit',
                method: 'POST',
                body: new FormData(),
            }),
        }),
    }),
})

export const { useGetCakeitemsQuery, useConstructorSubmitMutation } = rtkCake
