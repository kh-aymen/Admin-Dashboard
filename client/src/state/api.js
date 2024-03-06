import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_BASE_URL

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    reducerPath: 'adminApi',
    tagTypes: ["User", "Products"],
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
        })
    })
})

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } = api
