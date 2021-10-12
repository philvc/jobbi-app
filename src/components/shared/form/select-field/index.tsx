import { SelectFieldProps } from "./props";
import Select, { components } from "react-select";
import { customStyles } from "./styles";
import { useField, useFormikContext } from "formik";
import { COLORS } from "../../../../constants/colors";
import ArrowDown from "../../icons/arrow-down";
import { Flex } from "@chakra-ui/layout";
import Paragraph from "../../typography/paragraph";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/typography";
import Reset from "../../icons/reset";
import Cross from "../../icons/cross";
import Check from "../../icons/check";

// Dropdown button
const DropdownIndicator = (props: any) => {
	return (
		components.DropdownIndicator && (
			<components.DropdownIndicator {...props}>
				<ArrowDown fill={COLORS.GREY.T500.hex} height="10px" width="10px" className={props.selectProps.menuIsOpen ? "rotate-180 transform" : ""} />
			</components.DropdownIndicator>
		)
	);
};

const NoOptionsMessage = (props: any) => {
	return (
		<components.NoOptionsMessage {...props}>
			<Flex align="center" className="space-x-2">
				<Cross height={18} width={18} fill={COLORS.DANGER.T500.hex} />
				<Paragraph size={FONT_SIZES.EXTRA_SMALL} color={COLORS.DANGER.T500}>
					Aucun résultat trouvé
				</Paragraph>
			</Flex>
		</components.NoOptionsMessage>
	);
};

// Clear button
const ClearIndicator = (props: any) => {
	return (
		components.ClearIndicator && (
			<components.ClearIndicator {...props}>
				<Reset fill={COLORS.GREY.T500.hex} height={14} width={14} />
			</components.ClearIndicator>
		)
	);
};

const SelectField = ({ name, list, placeholder, icon, className, isMulti = false, ...rest }: SelectFieldProps) => {
	//Attributes
	const [field] = useField(name);
	const { setFieldValue } = useFormikContext<any>();

	const { Option } = components;

	const IconOption = (props: any) => (
		<Option {...props}>
			<Flex justify="between" align="center">
				<Flex type="row" className="space-x-2">
					{icon !== undefined && icon}
					<Paragraph size={FONT_SIZES.SMALL} weight={FONT_WEIGHT.REGULAR} color={COLORS.BLACK.T500}>
						{props.data.label}
					</Paragraph>
				</Flex>
				{props.isSelected && <Check height={"16px"} width={"16px"} fill={COLORS.GREY.T500.hex} />}
			</Flex>
		</Option>
	);

	//Render
	return (
		<Select
			styles={customStyles}
			placeholder={placeholder}
			options={list}
			components={{
				Option: IconOption,
				DropdownIndicator,
				ClearIndicator,
				NoOptionsMessage,
			}}
			isMulti={isMulti}
			hideSelectedOptions={!isMulti}
			value={list ? list.find((option: any) => option.value === field.value) : ""}
			onChange={(option: any) => setFieldValue(field.name, option)}
		/>
	);
};

export default SelectField;
