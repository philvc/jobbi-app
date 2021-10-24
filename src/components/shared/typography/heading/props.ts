import { BoxProps } from "@chakra-ui/layout";
import { Color } from "../../../../constants/colors";
import string from "../../../../utils/string";

export interface HeadingProps extends BoxProps {
	type?: number;
	children?: string;
}
