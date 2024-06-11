import { useState } from "react";
import { User } from "../../core/infrastructure/domain/user";
import { useCreateUserMutation, useDeleteUserMutation, useFindManyUsersQuery } from "../../core/infrastructure/api/userApiSlice";
import { toast } from "react-toastify";
export type FormAttr = Omit<User, "id">;

export const useUser = () => {
	const [form, setForm] = useState<FormAttr | null>(null);
	const [errors, setErrors] = useState<FormAttr | null>(null);
	const [createUser, { isLoading, error }] = useCreateUserMutation();
	const [deleteUser] = useDeleteUserMutation();
	const { isLoading: userDataLoading, data: userData, refetch } = useFindManyUsersQuery({});
	const [isOpen, setOpen] = useState<boolean>(false);

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
		setForm(user);
		setOpen(true);
	}

	function submit() {
		createUser(form)
			.then((msg: any) => {
				console.log(msg);
				refetch();
				if (msg?.error) {
					toast(msg?.error?.data);
				} else {
					toast("User created successfully");
				}
				setOpen(false);
			})
			.catch((err) => {
				console.log(err.data);
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
	};
};
