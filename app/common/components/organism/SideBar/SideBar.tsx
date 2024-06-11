"use client";
import { SideBarData } from "@/app/common/constants/data";
import Image from "next/image";
import React from "react";
import { Button } from "../../atoms/Button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
	const pathname = usePathname();

	return (
		<div className="w-[224px] h-[710px] rounded-md bg-white drop-shadow-md sticky p-[.5rem]">
			<h3 className="mb-[1rem] text-[#334155] pt-[.9rem]">Settings</h3>
			<div className="">
				{SideBarData.map((data, _index: number) => {
					const isActive = pathname === data.to;
					return (
						<Link
							href={data.to}
							key={_index}
							className={`flex rounded-md p-[1rem] items-center space-x-2 ${isActive ? "bg-[#F0F6FE] text-[#0D6EFD]" : ""}`}>
							<Image src={data.icon} alt={data.text} height={20} width={20} />
							<p className="text-[#94A3B8] text-[14px]">{data.text}</p>
						</Link>
					);
				})}
			</div>
			<hr className="mt-2" />
			<Button
				className="border absolute bottom-2 h-[44px]"
				leftIcon={<Image alt="Sign out" src="/SignOut.png" height={20} width={20} />}
				label="Back to dashboard"
			/>
		</div>
	);
};

export default SideBar;
