"use client";

import React, { useState } from "react";

import { User } from "@/app/(modules)/core/infrastructure/domain/user";
import { useUser } from "@/app/(modules)/settings/infrastructure/useUser";
import { SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import { Table, Tag } from "antd";
import Image from "next/image";
import { Button } from "../../atoms/Button/Button";
import { CustomInput } from "../../atoms/Input/Input";
import ModalComponent from "../Modal/Modal";

interface DataType {
	key: React.Key;
	name: string;
	email: string;
	role: string;
	action: React.ReactNode;
}

const columns: TableColumnsType<DataType> = [
	{
		title: "Name",
		dataIndex: "name",
		key: 1,
		sorter: {
			compare: (a, b) => a.name.localeCompare(b.name),
			multiple: 3,
		},
	},
	{
		title: "Email Address",
		dataIndex: "email",
		key: 2,
		sorter: {
			compare: (a, b) => a.email.localeCompare(b.email),
			multiple: 3,
		},
	},
	{
		title: "Role",
		dataIndex: "role",
		key: 3,
		sorter: {
			compare: (a, b) => a.role.localeCompare(b.role),
			multiple: 2,
		},
		render: (_, { role }) => {
			let color = "";
			let background = "";
			if (role === "Sales Manager") {
				color = "#0F973D";
				background = "#E7F6EC";
			} else if (role === "Administrator") {
				background = "#0D6EFD";
				color = "#F0F6FE";
			} else {
				background = "#FEF4E6";
				color = "#F58A07";
			}
			return (
				<Tag color={background} style={{ color: color }}>
					{role}
				</Tag>
			);
		},
	},
	{
		title: "Actions",
		key: 4,
		dataIndex: "action",
	},
];

const UsersTable = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

	const {
		createUser,
		error,
		form,
		handleChange,
		isDisabled,
		isOpen,
		handleCancel,
		handleOk,
		handleOpen,
		userData,
		userDataLoading,
		handleDeleteUser,
		editUser,
		isLoading,
	} = useUser();

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};

	return (
		<>
			<ModalComponent
				isLoading={isLoading}
				open={isOpen}
				handleOk={handleOk}
				handleCancel={handleCancel}
				error={error}
				form={form}
				handleChange={handleChange}
				isDisabled={isDisabled}
				submit={createUser}
			/>
			<div className="w-[100%]">
				<div className="bg-white flex items-center justify-between p-[1.5rem]">
					<div className="flex items-center space-x-1">
						<CustomInput className="lg:w-[300px] md:w-[180px] h-[29px]" type="text" prefix={<SearchOutlined />} placeholder="Search Here..." />
						<Button
							label="Filter"
							className="font-medium w-[115px] border border-[#CBD5E1]  h-[30px]"
							leftIcon={<Image alt="plus" src="/button-icon.png" height={16.25} width={16.25} />}
						/>
					</div>
					<div>
						<Button
							label="New User"
							onClick={handleOpen}
							className="bg-[#0D6EFD] text-white text-[14px] w-[200px] h-[28px]"
							leftIcon={<Image alt="plus" src="/CirclePlus.png" height={16.25} width={16.25} />}
						/>
					</div>
				</div>
				<Table
					rowSelection={rowSelection}
					columns={columns}
					dataSource={userData?.map((data: User) => ({
						name: data.name,
						role: data.role,
						key: data.id,
						email: data.email,
						action: (
							<div className="flex items-center space-x-2 cursor-pointer">
								<span className="text-[#0D6EFD] text-[14px] font-bold" onClick={() => editUser(data)}>
									View
								</span>
								<span onClick={() => handleDeleteUser(data.id)} className="text-[#98A2B3] text-[14px] font-bold">
									Remove
								</span>
							</div>
						),
					}))}
					loading={userDataLoading}
				/>
			</div>
		</>
	);
};

export default UsersTable;
