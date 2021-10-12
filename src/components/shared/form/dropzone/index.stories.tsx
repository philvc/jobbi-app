import { ChakraProvider } from "@chakra-ui/react";
import { Story, Meta } from "@storybook/react";
import DropZone from ".";
import { DropzoneProps } from "./props";

export default {
	component: DropZone,
	title: "Components/Form/Dropzone",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<DropzoneProps> = (args) => (
	<ChakraProvider>
		<DropZone {...args} />
	</ChakraProvider>
);

export const Primary = Template.bind({});

Primary.args = {};
