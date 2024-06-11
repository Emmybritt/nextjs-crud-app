import { headerIconList } from "@/app/common/constants/data";
import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Image from "next/image";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

const RightHeader = () => {
	return (
		<div className="flex items-center">
			<div className="mn:grid grid-cols-5 hidden items-center justify-center space-x-3">
				{headerIconList.map((data, _index: number) => (
					<Icon key={_index} icon={data.icon} text={data.text} alt={data.alt} />
				))}
				<div className="space-x-2 flex items-center">
					<Image alt="profile pic" src="/profile.png" height={38} width={38} />
					<DownOutlined className="h-[6px] w-[11px] text-[#667185]" />
				</div>
			</div>
			<MenuOutlined className="block mn:hidden" />
		</div>
	);
};

export default RightHeader;
