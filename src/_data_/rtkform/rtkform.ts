import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getConfigValue } from '@ijl/cli'
import data from '../AdminData'

const BaseApiUrl = getConfigValue('sugarbun.baseApiUrl')

export const rtkForm = createApi({
    reducerPath: 'rtkForm',
    baseQuery: fetchBaseQuery({
        baseUrl: BaseApiUrl + '/constructor/',
    }),
    endpoints: (builder) => ({
        getFormitems: builder.query({
            query: () => `formitems`,
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

export const { useGetFormitemsQuery, useConstructorSubmitMutation } = rtkForm
