import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from ".";
import { ButtonProps } from "./props";

export default {
	component: Button,
	title: "Components/ Buttons / Button",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	text: "Submit",
};

export const Danger = Template.bind({});

Danger.args = {
	variant: "danger",
	text: "Submit",
};

export const Outline = Template.bind({});

Outline.args = {
	variant: "outline",
	text: "Submit",
};
