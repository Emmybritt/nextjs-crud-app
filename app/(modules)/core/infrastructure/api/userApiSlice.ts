import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApiSlice = createApi({
	reducerPath: "UserApiSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://cac0d7b94832bf84e22c.free.beeceptor.com/api",
	}),
	endpoints: (builder) => ({
		findManyUsers: builder.query({
			query: () => ({
				url: "/users",
				method: "GET",
			}),
		}),
		createUser: builder.mutation({
			query: (params) => ({
				url: "/users",
				method: "POST",
				body: params,
			}),
		}),
		updateUser: builder.mutation({
			query: ({ id, ...params }) => ({
				url: `/users/${id}`,
				method: "PATCH",
				body: params,
			}),
		}),
		deleteUser: builder.mutation({
			query: (id) => ({
				url: `/users/${id}`,
				method: "DELETE",
			}),
		}),
		getUser: builder.query({
			query: (id) => ({
				url: `/users/${id}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useFindManyUsersQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation, useGetUserQuery } = UserApiSlice;
