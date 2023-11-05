import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://banglamart-server-68xt.vercel.app",
  }),
  tagTypes: ['products,carts,users'],
  endpoints: (builder) => ({}),
 
});


