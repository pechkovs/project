import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getConfigValue } from '@ijl/cli'

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
    }),
})

export const { useGetFormitemsQuery } = rtkForm
