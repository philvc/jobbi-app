import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box, Flex } from "@chakra-ui/layout";
import { COLORS } from ".";
import { FONT_SIZES, FONT_WEIGHT } from "../typography";
import Heading from "../../components/shared/typography/heading";
import Paragraph from "../../components/shared/typography/paragraph";

const Demo = () => {
	return (
		<Box>
			<Heading>Colors</Heading>
			<Flex direction="column">
				{Object.keys(COLORS).map((colorName) => {
					return (
						<Box mt={10}>
							<Paragraph weight={FONT_WEIGHT.BOLD}>{colorName}</Paragraph>
							<Flex mt={8} direction="row">
								{Object.keys(COLORS[colorName]).map((colorKey, index) => {
									const color = COLORS[colorName];
									if (colorKey == "hex") {
										return (
											<Box ml={index == 0 ? 0 : 10}>
												<Box borderWidth={1} borderColor={COLORS.GREY.T500.hex} borderStyle={"solid"} h={75} w={75} borderRadius={8} background={color[colorKey]} />
												<Box mt={2.5}>
													<Paragraph size={FONT_SIZES.SMALL}>Default</Paragraph>
												</Box>
												<Box mt={2.5}>
													<Paragraph color={COLORS.GREY.T500} size={FONT_SIZES.EXTRA_SMALL} weight={FONT_WEIGHT.LIGHT}>
														{color[colorKey]}
													</Paragraph>
												</Box>
											</Box>
										);
									}
									return (
										<Box ml={index == 0 ? 0 : 10}>
											<Box borderWidth={1} borderColor={COLORS.GREY.T500.hex} borderStyle={"solid"} h={75} w={75} borderRadius={8} background={color[colorKey].hex} />
											<Box mt={2.5}>
												<Paragraph size={FONT_SIZES.SMALL}>{colorKey}</Paragraph>
											</Box>
											<Box mt={2.5}>
												<Paragraph color={COLORS.GREY.T500} size={FONT_SIZES.EXTRA_SMALL} weight={FONT_WEIGHT.LIGHT}>
													{color[colorKey].hex}
												</Paragraph>
											</Box>
										</Box>
									);
								})}
							</Flex>
						</Box>
					);
				})}
			</Flex>
		</Box>
	);
};

export default {
	component: Demo,
	title: "Foundations/Colors",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Demo {...args} />;

export const Default = Template.bind({});
