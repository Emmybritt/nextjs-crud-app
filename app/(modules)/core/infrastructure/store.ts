import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./api/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { UserApiSlice } from "./api/userApiSlice";

export const store = configureStore({
	reducer: {
		userSlice: userSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
		[UserApiSlice.reducerPath]: UserApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
			.concat(apiSlice.middleware)
			.concat(UserApiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
