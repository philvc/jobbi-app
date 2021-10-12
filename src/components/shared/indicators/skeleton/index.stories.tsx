import { Meta, Story } from "@storybook/react";

import Skeleton from "./index";
import SkeletonProps from "./props";

//👇 This default export determines where your story goes in the story list
export default {
	title: "Components/Indicator/Skeleton",
	component: Skeleton,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<SkeletonProps> = (args: SkeletonProps) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
	height: 20,
	width: 200,
	isLoading: true,
	children: "test",
};
