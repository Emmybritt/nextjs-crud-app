import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { notFound } from "next/navigation";

export const BASE_URL: string = process.env.REACT_APP_SERVERPATH as string;

const baseQuery = fetchBaseQuery({
	baseUrl: `${BASE_URL}/api`,
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result.error) {
		notFound();
	}
	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({}),
	tagTypes: [],
});
