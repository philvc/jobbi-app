import { Meta, Story } from "@storybook/react";

import Activity from "./index";
import ActivityProps from "./props";

//👇 This default export determines where your story goes in the story list
export default {
	title: "Components/Indicator/Activity",
	component: Activity,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ActivityProps> = (args: ActivityProps) => <Activity {...args} />;

export const Default = Template.bind({});
Default.args = {
	height: 50,
	width: 50,
	isLoading: true,
	children: "test",
};
