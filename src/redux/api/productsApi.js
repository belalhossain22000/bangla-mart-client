
import { baseApi } from "./baseApi";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get products
    getProducts: builder.query({
      query: () => "/getProducts",
      providesTags: ["products"],
    }),
    //get task by id
    getTasksById: builder.query({
      query: (_id) => `/getTask/${_id}`,
    }),

    // post task
    postTasks: builder.mutation({
      query: (data) => ({
        url: "/postTasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["task"],
    }),
    // update task
    updateTasks: builder.mutation({
      query: ({ data, id }) => ({
        url: `/updateTask/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["task"],
    }),
    // delete task
    deleteTasks: builder.mutation({
      query: (id) => ({
        url: `/deleteTask/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["task"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetTasksByIdQuery,
  usePostTasksMutation,
  useDeleteTasksMutation,
  useUpdateTasksMutation,
} = taskApi;
