import { Meta, Story } from "@storybook/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const Drawer = () => <div />;

//👇 This default export determines where your story goes in the story list
export default {
	title: "Components/Layout/ Drawer",
	component: Drawer,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Drawer />;

export const Default = Template.bind({});
