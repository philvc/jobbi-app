import { Meta, Story } from "@storybook/react";

import Progress from "./index";
import ProgressProps from "./props";

//👇 This default export determines where your story goes in the story list
export default {
	title: "Components/Indicator/Progress",
	component: Progress,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ProgressProps> = (args: ProgressProps) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
	now: 32,
};
