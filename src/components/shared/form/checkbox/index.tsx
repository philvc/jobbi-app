import { useState, useEffect } from "react";
import { COLORS } from "../../../../constants/colors";
import { useField, useFormikContext } from "formik";
import { Box, Flex } from "@chakra-ui/layout";
import Ticked from "../../icons/ticked";
import CheckboxProps from "./props";

const Checkbox = ({ name }: CheckboxProps) => {
	// Attributes
	const [field] = useField(name);
	const { setFieldValue } = useFormikContext<any>();

	return (
		<Box background={field.value ? COLORS.BLUE.T500.hex : COLORS.TRANSPARENT.hex} rounded={4} overflow="hidden" h={5} w={5} cursor={"pointer"} borderColor={field.value ? COLORS.BLUE.T500.hex : COLORS.GREY.T500.hex} borderWidth={2} onClick={() => setFieldValue(name, !field.value)}>
			<Flex h={"100%"} w={"100%"} align="center" justify="center">
				<Ticked width={10} height={6.5} fill="white" />
			</Flex>
		</Box>
	);
};
export default Checkbox;
