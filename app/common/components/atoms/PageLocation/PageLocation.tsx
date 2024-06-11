import React from "react";

export interface PageLocationAttr {
	tab: string;
	subTab: string;
}

const PageLocation: React.FC<PageLocationAttr> = ({ subTab, tab }) => {
	return (
		<div className="text-[14px] text-[#98A2B3] font-medium font-satishi mb-[20.3px] mt-[4px]">
			{tab} / {subTab}
		</div>
	);
};

export default PageLocation;
