import Image from "next/image";
import React from "react";
import { CustomInput } from "../../atoms/Input/Input";
import { SearchOutlined } from "@ant-design/icons";

const LeftHeader = () => {
	return (
		<div className="flex items-center flex-row justify-center space-x-[1.5rem]">
			<Image src="/logo.png" alt="logo" width={49.85} height={48} />
			<CustomInput
				className="lg:w-[450px] h-[28px] bg-[#F0F2F5] md:w-[300px]  xl:w-[629px]"
				type="text"
				prefix={<SearchOutlined />}
				placeholder="Search Here..."
			/>
		</div>
	);
};

export default LeftHeader;
