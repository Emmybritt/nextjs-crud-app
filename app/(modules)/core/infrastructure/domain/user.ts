export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	role: string;
}

export interface UserSliceState {
	user: User | null;
	loading: boolean;
}
