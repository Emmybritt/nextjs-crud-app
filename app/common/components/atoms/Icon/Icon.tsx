import { BellOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

interface IconAttr {
	text: string;
	icon: string;
	alt: string;
}

const Icon: React.FC<IconAttr> = ({ icon, text, alt }) => {
	return (
		<div className="flex flex-col items-center justify-center w-[70px]">
			<div>
				<Image src={icon} height={24} width={24} alt={alt} />
			</div>
			<p className="text-[12px] font-normal">{text}</p>
		</div>
	);
};

export default Icon;
