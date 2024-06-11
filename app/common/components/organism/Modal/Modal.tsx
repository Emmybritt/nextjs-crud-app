import { Modal } from "antd";
import React from "react";
import { Button } from "../../atoms/Button/Button";
import CustomSelect from "../../atoms/CustomSelect/CustomSelect";
import { CustomInput } from "../../atoms/Input/Input";
import ModalHeader from "../../atoms/ModalHeader/ModalHeader";
import { FormAttr } from "@/app/(modules)/settings/infrastructure/useUser";

interface ModalComponentAttr {
	open: boolean;
	handleCancel: () => void;
	handleOk: () => void;
	error: FormAttr | null;
	form: FormAttr | null;
	handleChange: (name: keyof FormAttr, value: any, required?: boolean) => void;
	submit: () => void;
	isDisabled: () => boolean;
	isLoading: boolean;
}

const ModalComponent: React.FC<ModalComponentAttr> = ({
	handleCancel,
	handleOk,
	open,
	error,
	form,
	handleChange,
	submit: createUser,
	isDisabled,
	isLoading,
}) => {
	return (
		<>
			<Modal
				open={open}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={() => (
					<Button label="Add User" loading={isLoading} isDisabled={isDisabled()} onClick={createUser} className="bg-[#0D6EFD] text-white w-full" />
				)}>
				<ModalHeader title="New User" />
				<div className="space-y-[1rem]">
					<CustomInput
						value={form?.email}
						error={error?.email}
						onChange={(e) => handleChange("email", e.target.value)}
						label="Email Address"
						placeholder="New User's Email Address"
					/>
					<CustomInput
						value={form?.name}
						onChange={(e) => handleChange("name", e.target.value)}
						error={error?.name}
						label="Full Name"
						placeholder="New User's Full Name"
					/>
					<CustomSelect
						error={error?.role}
						onChange={(value) => handleChange("role", value)}
						value={form?.role}
						placeholder="Select Role"
						label="Role"
						options={[
							{ label: "Administrator", value: "Administrator" },
							{ label: "Sales Manager", value: "Sales Manager" },
							{ label: "Sales Representative", value: "sales Representative" },
						]}
					/>
					<CustomInput
						label="Password"
						onChange={(e) => handleChange("password", e.target.value)}
						error={error?.password}
						value={form?.password}
						type="password"
						placeholder="Create Password for new user"
					/>
				</div>
			</Modal>
		</>
	);
};

export default ModalComponent;
