import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box, Container, Flex } from "@chakra-ui/layout";
import Heading from "../../components/shared/typography/heading";
import { FONT_SIZES, FONT_WEIGHT } from ".";
import Paragraph from "../../components/shared/typography/paragraph";

const Demo = () => {
	return (
		<Box>
			<Heading>Typography</Heading>
			<Heading type={2}>Description</Heading>
			<Paragraph>{`The recommended way to use typography is with <Paragraph /> and <Heading /> components.`}</Paragraph>
			<Heading type={2}>Configuration</Heading>
			<Paragraph>This is the current configuration</Paragraph>
			<Heading type={3}>Sizes</Heading>
			{Object.keys(FONT_SIZES)
				.filter((x) => !(parseInt(x) >= 0))
				.map((elt) => (
					<Paragraph>{`${elt} = ${FONT_SIZES[elt]}px`}</Paragraph>
				))}
			<Heading type={3}>Weights</Heading>
			{Object.keys(FONT_WEIGHT)
				.filter((x) => !(parseInt(x) >= 0))
				.map((elt) => (
					<Paragraph>{`${elt} = ${FONT_WEIGHT[elt]}`}</Paragraph>
				))}
		</Box>
	);
};

export default {
	component: Demo,
	title: "Foundations/Typography",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Demo {...args} />;

export const Default = Template.bind({});
