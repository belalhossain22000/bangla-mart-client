import { baseApi } from "./baseApi";


export const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get users
    getProducts: builder.query({
      query: () => "/users",
    //   providesTags: ["products"],
    }),
    //get task by id
    // getProductById: builder.query({
    //   query: (_id) => `/getProduct/${_id}`,
    // }),

    // post user
    postUser: builder.mutation({
      query: (data) => ({
        url: "/createUser",
        method: "POST",
        body: data,
      }),
    //   invalidatesTags: ["task"],
    }),
    // update task
    // updateTasks: builder.mutation({
    //   query: ({ data, id }) => ({
    //     url: `/updateTask/${id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["task"],
    // }),
    // delete task
    // deleteTasks: builder.mutation({
    //   query: (id) => ({
    //     url: `/deleteTask/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["task"],
    // }),
  }),
});

export const {
  usePostUserMutation
} = taskApi;
