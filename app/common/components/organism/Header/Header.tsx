import React from "react";
import LeftHeader from "../../molecules/LeftHeader/LeftHeader";
import RightHeader from "../../molecules/RightHeader/RightHeader";

const Header = () => {
	return (
		<div className="flex items-center justify-between sticky drop-shadow-md bg-[#FFFFFF] px-[36px] py-[14px] top-0 w-[100%]">
			<LeftHeader />
			<RightHeader />
		</div>
	);
};

export default Header;
