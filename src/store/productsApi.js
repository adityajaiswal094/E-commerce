import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8080/";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/",
        }),

        getSingleProduct: builder.query({
            query: (id) => `/singleproduct/${id}`,
        }),
    })
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;