import { useState } from "react";
import { User } from "../../core/infrastructure/domain/user";
import {
	useCreateUserMutation,
	useDeleteUserMutation,
	useFindManyUsersQuery,
	useUpdateUserMutation,
} from "../../core/infrastructure/api/userApiSlice";
import { toast } from "react-toastify";
export type FormAttr = Omit<User, "id">;

export const useUser = () => {
	const [form, setForm] = useState<FormAttr | null>(null);
	const [errors, setErrors] = useState<FormAttr | null>(null);
	const [createUser, { isLoading, error }] = useCreateUserMutation();
	const [deleteUser] = useDeleteUserMutation();
	const { isLoading: userDataLoading, data: userData, refetch } = useFindManyUsersQuery({});
	const [isOpen, setOpen] = useState<boolean>(false);
	const [isEditUser, setEditUSer] = useState<boolean>(false);
	const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

	function handleChange(name: keyof FormAttr, value: string, isRequired = true) {
		if (isRequired && !value) {
			setErrors((prev: any) => ({
				...prev,
				[name]: `${name} is required`,
			}));
			return setForm((prev: any) => ({
				...prev,
				[name]: value,
			}));
		}

		setErrors((prev: any) => ({
			...prev,
			[name]: null,
		}));

		setForm((prev: any) => ({
			...prev,
			[name]: value,
		}));
	}

	function editUser(user: User) {
		setEditUSer(true);
		setForm(user);
		setOpen(true);
	}

	async function updateUserData() {
		try {
			await updateUser(form).unwrap();
			refetch();
			setOpen(false);
			toast("User updated successfully");
		} catch (error) {
			console.log(error);
			toast("An error occured updating user", { style: { backgroundColor: "red" } });
		}
	}

	function submit() {
		createUser(form)
			.then((msg: any) => {
				refetch();
				if (msg?.error) {
					toast(msg?.error?.data);
				} else {
					toast("User created successfully");
				}
				setOpen(false);
			})
			.catch((err) => {
				toast(err.data, { style: { backgroundColor: "red" } });
			});
	}

	const handleDeleteUser = async (userId: string) => {
		try {
			await deleteUser(userId).unwrap();
			refetch();
			toast("User deleted successfully");
		} catch (err) {
			toast("Failed to delete user:");
		}
	};

	function isDisabled(): boolean {
		return !form?.email || !form.name || !form.password || !form.role || isLoading;
	}

	const handleOk = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setEditUSer(false);
		setForm(null);
		setOpen(true);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return {
		form,
		error: errors,
		handleChange,
		createUser: submit,
		isDisabled,
		isOpen,
		setOpen,
		handleOk,
		handleOpen,
		handleCancel,
		userDataLoading,
		userData,
		handleDeleteUser,
		editUser,
		isLoading,
		isEditUser,
		updateUserData,
		isUpdating,
	};
};
