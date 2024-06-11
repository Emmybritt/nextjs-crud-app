import PageLocation from "@/app/common/components/atoms/PageLocation/PageLocation";
import UsersTable from "@/app/common/components/organism/UsersTable/UsersTable";
import { Tabs, TabsProps } from "antd";
import React from "react";

const items: TabsProps["items"] = [
	{
		key: "1",
		label: "Users",
		children: <UsersTable />,
	},
	{
		key: "2",
		label: "Roles",
		children: "Content of Tab Pane 2",
	},
];

const page = () => {
	return (
		<div className="">
			<div className="mb-[2rem]">
				<PageLocation tab="Settings" subTab="Users & Roles Settings" />
				<h3 className="text-[24px] text-[#1D2739] font-bold font-satishi">Users & Roles</h3>
				<p className="text-[#98A2B3] text-[16px] font-normal] font-satishi">Manage all users in your business</p>
			</div>

			<Tabs defaultActiveKey="1" items={items} />
		</div>
	);
};

export default page;
