import { Text } from "@chakra-ui/layout";
import { COLORS } from "../../../../constants/colors";
import { DEFAULT_FONT_FAMILY, FONT_SIZES, FONT_WEIGHT } from "../../../../constants/typography";
import { ParagraphProps } from "./props";

export default function Paragraph({ children, size = FONT_SIZES.REGULAR, weight = FONT_WEIGHT.REGULAR, color = COLORS.BLACK.T500 }: ParagraphProps) {
	return (
		<Text lineHeight={`${size}px`} color={color.hex} fontSize={size} fontWeight={weight} fontFamily={DEFAULT_FONT_FAMILY} m={0}>
			{children}
		</Text>
	);
}
