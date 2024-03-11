import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_BASE_URL

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    reducerPath: 'adminApi',
    tagTypes: ["User", "Products", "Customers", "Transactions", "geography", "Sales", "Admins"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProducts: build.query({
            query: () => "client/products/",
            providesTags: ["Products"]
        }),
        getCustomers: build.query({
            query: () => "client/customers/",
            providesTags: ["Customers"]
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/transactions/",
                method: 'GET',
                params: { page, pageSize, sort, search }
            }),
            providesTags: ["Transactions"]
        }),
        getGeography: build.query({
            query: () => "client/geography",
            providesTags: ["geography"]
        }),
        getSales: build.query({
            query: () => "sales/sales",
            providesTags: ["Sales"]
        }),
        getAdmins: build.query({
            query: () => "management/admins",
            providesTags: ["Admins"]
        })
    })
})

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery
} = api
