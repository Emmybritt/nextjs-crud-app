import { Select } from "antd";
import React from "react";

interface OptionsAttr {
	label: string;
	value: string;
}
export interface CustomSelectAttr {
	onChange?: (value: string) => void;
	onSearch?: (value: string) => void;
	filterOption?: (input: string, option?: { label: string; value: string }) => boolean;
	options?: Array<OptionsAttr>;
	label?: string;
	error?: string;
	placeholder?: string;
	value?: string;
}

const CustomSelect: React.FC<CustomSelectAttr> = ({ onChange, onSearch, filterOption, options, label, error, placeholder, value }) => {
	return (
		<div className="w-full">
			{label && (
				<label htmlFor={label} className="text-[#9794AA] mb-[1rem]">
					{label}
				</label>
			)}
			<Select
				showSearch
				placeholder={placeholder}
				optionFilterProp="children"
				onChange={onChange}
				onSearch={onSearch}
				style={{ height: 60 }}
				className="w-[100%] h-[56px] text-lg"
				value={value}
				filterOption={filterOption}
				options={options}
			/>
			{error && <p className="text-xs text-red-600 ml-[.4rem] capitalize">{error}</p>}
		</div>
	);
};

export default CustomSelect;
