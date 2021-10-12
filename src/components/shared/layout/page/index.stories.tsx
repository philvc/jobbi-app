import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Page from ".";

export default {
	title: "Components/ Layout/ Page",
	component: Page,
} as Meta;

const Template: Story<React.HTMLAttributes<HTMLDivElement>> = (args) => <Page {...args} />;

// Default scenario
export const Default = Template.bind({});
Default.args = {
	children: <div>Page</div>,
};
