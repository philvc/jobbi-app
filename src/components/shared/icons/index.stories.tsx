import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box, Container, Flex } from "@chakra-ui/layout";
import Heading from "../typography/heading";
import Loupe from "./loupe";
import Icons from ".";
import { COLORS } from "../../../constants/colors";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import Paragraph from "../typography/paragraph";
import { FONT_SIZES } from "../../../constants/typography";

const Demo = () => {
	return (
		<Box maxW={"500px"}>
			<Heading>Icons</Heading>
			<Table mt={5}>
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>24x24</Th>
					</Tr>
				</Thead>
				<Tbody>
					{Object.keys(Icons).map((icon, index) => (
						<Tr background={index % 2 == 0 ? COLORS.WHITE.hex : COLORS.GREY.T100.hex}>
							<Td>{icon}</Td>
							<Td>{Icons[icon]({ height: 24, width: 24, fill: COLORS.GREY.T500.hex })}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</Box>
	);
};

export default {
	component: Demo,
	title: "Foundations/Icons",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Demo {...args} />;

export const Default = Template.bind({});
