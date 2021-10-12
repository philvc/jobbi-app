import { useTranslation } from "react-i18next";
import { COLORS } from "../../../../constants/colors";
import { DEFAULT_FONT_FAMILY, FONT_SIZES, FONT_WEIGHT } from "../../../../constants/typography";
import { HeadingProps } from "./props";
import { Heading as ChakraHeading } from "@chakra-ui/react";

const Heading = ({ type = 1, children, color = COLORS.BLACK.T500, className }: HeadingProps) => {
	// Attributes
	const { t } = useTranslation("common");

	// Functions
	function renderHeading(): React.ReactElement {
		switch (type) {
			default:
			case 1:
				return (
					<ChakraHeading fontFamily={DEFAULT_FONT_FAMILY} fontWeight={FONT_WEIGHT.SEMI_BOLD} color={color.hex} fontSize={FONT_SIZES.GIANT}>
						{t(children)}
					</ChakraHeading>
				);
			case 2:
				return (
					<ChakraHeading fontFamily={DEFAULT_FONT_FAMILY} fontWeight={FONT_WEIGHT.SEMI_BOLD} color={color.hex} fontSize={FONT_SIZES.EXTRA_BIG}>
						{t(children)}
					</ChakraHeading>
				);
			case 3:
				return (
					<ChakraHeading fontFamily={DEFAULT_FONT_FAMILY} fontWeight={FONT_WEIGHT.SEMI_BOLD} color={color.hex} fontSize={FONT_SIZES.BIG}>
						{t(children)}
					</ChakraHeading>
				);
			case 4:
				return (
					<ChakraHeading fontFamily={DEFAULT_FONT_FAMILY} fontWeight={FONT_WEIGHT.SEMI_BOLD} color={color.hex} fontSize={FONT_SIZES.SMALL}>
						{t(children)}
					</ChakraHeading>
				);
			case 5:
				return (
					<ChakraHeading fontFamily={DEFAULT_FONT_FAMILY} fontWeight={FONT_WEIGHT.SEMI_BOLD} color={color.hex} fontSize={FONT_SIZES.ENORMOUS}>
						{t(children)}
					</ChakraHeading>
				);
		}
	}

	return <>{renderHeading()}</>;
};

export default Heading;
