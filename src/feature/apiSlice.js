import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${REACT_APP_API_BASE_URL}` }),
  endpoints: (builder) => ({
    getAllPeople: builder.query({
      query: (numPage) => `/?page=${numPage}&results=50&seed=abc`,
    }),
    getProduct: builder.query({
      query: (id) => `/id?q=${id}`,
    }),
  }),
});

export const { useGetAllPeopleQuery, useGetPersonQuery } = peopleApi;