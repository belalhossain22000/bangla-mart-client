import { baseApi } from "./baseApi";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // // get products
    // getCart: builder.query({
    //   query: () => "/getUserCart/",
    //   providesTags: ["carts"],
    // }),
    //get task by id
    getCartByEmail: builder.query({
      query: (email) => `/getUserCart/${email}`,
      providesTags: ["carts"],
    }),

    // post task
    postCarts: builder.mutation({
      query: (data) => ({
        url: `/updateUserCart/${data?.userEmail}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["carts"],
    }),
    // update product quantity
    updateProductQuantity: builder.mutation({
      query: (variables) => ({
        url: `/updateCartQuantity/${variables?.email}`,
        method: "PUT",
        body: variables,
      }),
      invalidatesTags: ["carts"],
    }),
    // delete cart
    deleteCartItem: builder.mutation({
      query: (itemDetails) => ({
        url: `/removeFromCart/${itemDetails.email}/${itemDetails._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["carts"],
    }),
  }),
});

export const {
  usePostCartsMutation,
  useGetCartByEmailQuery,
  useGetCartQuery,
  useDeleteCartItemMutation,
  useUpdateProductQuantityMutation,
} = taskApi;
