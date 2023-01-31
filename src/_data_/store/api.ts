import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getConfigValue } from '@ijl/cli'

type AdminStatRequestResult = {
    monthID: string
    amount: number
}[]

const BaseApiUrl = getConfigValue('sugarbun.baseApiUrl')

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BaseApiUrl + '/admin/',
    }),
    reducerPath: 'admin',
    tagTypes: ['Orders', 'Sales', 'Revenue'],
    endpoints: (build) => ({
        getSales: build.query<AdminStatRequestResult, undefined>({
            query: () => 'sales/sales',
            providesTags: ['Sales'],
        }),
        getOrders: build.query<AdminStatRequestResult, undefined>({
            query: () => 'orders/orders',
            providesTags: ['Orders'],
        }),
        getRevenue: build.query<AdminStatRequestResult, undefined>({
            query: () => `revenue/revenue/`,
            providesTags: ['Revenue'],
        }),
    }),
})

export const { useGetSalesQuery, useGetOrdersQuery, useGetRevenueQuery } = api
