import Image from "next/image";
import React from "react";

interface ModalHeaderAttr {
	title: string;
}
const ModalHeader: React.FC<ModalHeaderAttr> = ({ title }) => {
	return (
		<div className="flex flex-col items-center">
			<Image src="/userImage.png" alt="userImage" height={64} width={64} />
			<h3 className="font-bold text-[24px] font-satishi">{title}</h3>
		</div>
	);
};

export default ModalHeader;
