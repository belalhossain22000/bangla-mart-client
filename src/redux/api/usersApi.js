import { baseApi } from "./baseApi";


export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get users
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
    // get task by email
    getUserByEmail: builder.query({
      query: (email) => `/users/${email}`,
      providesTags: ["users"],
    }),

    // post user
    postUser: builder.mutation({
      query: (data) => ({
        url: "/createUser",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    // // update user
    // updateUserByEmail: builder.mutation({
    //   query: ({ data, email }) => ({
    //     url: `/users/${email}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["users"],
    // }),
    // update user
    updateUserAddressByEmail: builder.mutation({
      query: ({ address, email }) => ({
        url: `/users/${email}/updateAddress`,
        method: "PUT",
        body: address,
      }),
      invalidatesTags: ["users"],
    }),
    // delete users
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/deleteUser/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  usePostUserMutation,
  useGetUsersQuery,
  useGetUserByEmailQuery,
  useDeleteUserMutation,
  useUpdateUserAddressByEmailMutation
} = usersApi;
