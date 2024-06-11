import { Spin } from "antd";
import React from "react";
import { MouseEventHandler } from "react";

type VariantKeys = "primary" | "secondary" | "tertiary" | "success" | "danger";
type TSize = "small" | "normal" | "large";
type ButtonTypeKeys = "outline" | "solid";

interface IButton {
	isDisabled?: boolean;
	backgroundColor?: string;
	variant?: VariantKeys;
	size?: TSize;
	label: string;
	className?: string;
	type?: ButtonTypeKeys;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	loading?: boolean;
}
export const Button: React.FC<IButton> = ({ label, onClick, className, backgroundColor = "#6938EF", isDisabled, leftIcon, rightIcon, loading }) => {
	const classNameData = `${className} h-[40px] rounded-md space-x-2 justify-center flex flex-row items-center w-[95%] bg-[${backgroundColor}]`;
	return (
		<button onClick={onClick} disabled={isDisabled} className={classNameData}>
			{loading ? (
				<p>In progress...</p>
			) : (
				<>
					<div>{leftIcon}</div>
					<p className="font-[500] text-[14px]">{label}</p>
					<div>{rightIcon}</div>
				</>
			)}
		</button>
	);
};
