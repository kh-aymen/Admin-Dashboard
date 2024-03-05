import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_BASE_URL

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    reducerPath: 'adminApi',
    tagTypes: ["User"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        })
    })
})

export const {
    useGetUserQuery,
} = api
