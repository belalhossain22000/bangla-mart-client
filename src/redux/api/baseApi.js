import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ['products,carts'],
  endpoints: (builder) => ({}),
 
});


