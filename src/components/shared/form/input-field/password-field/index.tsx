import React, { useRef, useState } from "react";
import { setNestedObjectValues, useField, useFormikContext } from "formik";
import { motion } from "framer-motion";
import { Box, Container, Flex } from "@chakra-ui/layout";
import Paragraph from "../../../typography/paragraph";
import { FONT_SIZES } from "../../../../../constants/typography";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import EyeShow from "../../../icons/eye-show";
import EyeHide from "../../../icons/eye-hide";
import { InputPasswordFieldProps } from "./props";
import { COLORS } from "../../../../../constants/colors";
import string from "../../../../../utils/string";

const PasswordInputField = ({ name, type, placeholder, disabled }: InputPasswordFieldProps) => {
	// Attributes
	const [isHovered, setIsHovered] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [isEyeClicked, setIsEyeClicked] = useState(false);
	const [{ value, onBlur, ...rest }, meta] = useField(name);

	// Functions
	function getBorderColor() {
		if (isHovered || isFocused) {
			return COLORS.BLACK.T500.hex;
		}
		if (meta.touched && meta.error) {
			return COLORS.DANGER.T500.hex;
		}

		return COLORS.GREY.T100.hex;
	}

	// Render
	return (
		<Box>
			<Box background={COLORS.WHITE.hex} outline="none" rounded={10} px={3} pt={string.isNullOrUndefined(value) ? `${2.25 * 4}px` : 1.5} pb={string.isNullOrUndefined(value) ? `${2.25 * 4}px` : 0.5} w={"full"} borderStyle={"solid"} borderColor={getBorderColor()} borderWidth={1} cursor={disabled ? "not-allowed" : undefined}>
				<Flex direction="row" align="center">
					<Box>
						{!string.isNullOrUndefined(meta.value) && (
							<Paragraph color={COLORS.GREY.T500} size={FONT_SIZES.TINY}>
								{placeholder}
							</Paragraph>
						)}
						<Input
							onBlur={(e) => {
								setIsFocused(false);
								onBlur(e);
							}}
							onFocus={() => setIsFocused(true)}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							disabled={disabled}
							type={isEyeClicked ? "text" : "password"}
							p={0}
							placeholder={placeholder}
							outline={"none"}
							_focus={{ outline: "none" }}
							h="auto"
							background={COLORS.TRANSPARENT.hex}
							w="full"
							border="none"
							_placeholder={{ fontSize: FONT_SIZES.SMALL }}
							fontSize={FONT_SIZES.SMALL}
							value={value}
							{...rest}
						/>
					</Box>
					<Box cursor="pointer" mt={-1} ml={"auto"} onClick={() => setIsEyeClicked(!isEyeClicked)}>
						{!isEyeClicked ? <EyeShow height="16px" width="16px" /> : <EyeHide height="16px" width="16px" />}
					</Box>
				</Flex>
			</Box>
			{meta.touched && meta.error && (
				<Container my={12}>
					<Paragraph color={COLORS.DANGER.T500} size={FONT_SIZES.EXTRA_SMALL}>
						{meta.error}
					</Paragraph>
				</Container>
			)}
		</Box>
	);
};

export default PasswordInputField;
