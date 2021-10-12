import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Heading from "./index";
import { HeadingProps } from "./props";
import { Box, Container, Flex } from "@chakra-ui/layout";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/typography";
import { COLORS } from "../../../../constants/colors";
import Paragraph from "../paragraph";

export default {
	title: "Components/Typography/Heading",
	component: Heading,
	argTypes: {
		children: { control: "string" },
	},
} as Meta;

const SIZES = [4, 3, 2, 1];

const Template: Story<HeadingProps> = (args) => {
	return (
		<Box>
			<Heading>Heading</Heading>
			<Container>
				<Heading type={3}>Description</Heading>
				<Paragraph weight={FONT_WEIGHT.LIGHT}>This component is used to render heading elements to the screen.</Paragraph>
			</Container>
			<Flex direction="column">
				<Flex direction="column">
					<Heading type={3}>Types</Heading>
					<Box borderColor={COLORS.GREY.T200.hex} borderStyle="solid" borderWidth={1} background={COLORS.BACKGROUND.hex} p={20}>
						{SIZES.map((size, index) => (
							<Box mb={5} pb={5}>
								<Heading type={size}>{`This is type ${size}`}</Heading>
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
