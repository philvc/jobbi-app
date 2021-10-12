import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Paragraph from "./index";
import { ParagraphProps } from "./props";
import { Box, Container, Flex } from "@chakra-ui/layout";
import Heading from "../heading";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/typography";
import { COLORS } from "../../../../constants/colors";

export default {
	title: "Components/Typography/Paragraph",
	component: Paragraph,
	argTypes: {
		children: { control: "string" },
	},
} as Meta;

const SIZES = Object.keys(FONT_SIZES).filter((x) => !(parseInt(x) >= 0));
const WEIGHTS = Object.keys(FONT_WEIGHT).filter((x) => !(parseInt(x) >= 0));

const Template: Story<ParagraphProps> = (args) => {
	return (
		<Box>
			<Heading>Paragraph</Heading>
			<Box>
				<Heading type={3}>Description</Heading>
				<Paragraph weight={FONT_WEIGHT.LIGHT}>This component is used to render text elements to the screen.</Paragraph>
			</Box>
			<Flex direction="column">
				<Flex direction="column">
					<Heading type={3}>Sizes</Heading>
					<Box borderColor={COLORS.GREY.T200.hex} borderStyle="solid" borderWidth={1} background={COLORS.BACKGROUND.hex} p={10} pb={5}>
						{SIZES.map((size, index) => (
							<Box mb={5} pb={5}>
								<Paragraph size={FONT_SIZES[size]}>{`This is ${size.toLowerCase()}`}</Paragraph>
							</Box>
						))}
					</Box>
				</Flex>
				<Flex direction="column">
					<Heading type={3}>Weight</Heading>
					<Box borderColor={COLORS.GREY.T200.hex} borderStyle="solid" borderWidth={1} background={COLORS.BACKGROUND.hex} p={10} pb={5}>
						{WEIGHTS.map((weight) => (
							<Box mb={5} pb={5}>
								<Paragraph weight={FONT_WEIGHT[weight]}>{`This is ${weight.toLowerCase()}`}</Paragraph>
							</Box>
						))}
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
};

// Default scenario
export const Default = Template.bind({});
