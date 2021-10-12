import { Meta, Story } from "@storybook/react";
import { Form, Formik } from "formik";
import React from "react";
import SelectField from ".";
import Check from "../../icons/check";
import { SelectFieldProps } from "./props";

//👇 This default export determines where your story goes in the story list
export default {
	title: "Components/Form/SelectField",
	component: SelectField,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<SelectFieldProps> = (args: SelectFieldProps) => (
	<Formik<any> initialValues={{}} onSubmit={(values, {}) => {}}>
		<Form>
			<SelectField {...args} />
		</Form>
	</Formik>
);

export const Default = Template.bind({});
Default.args = {
	list: [
		{ label: "Test", value: "Test" },
		{ label: "Test2", value: "Test2" },
	],
	placeholder: "Select option",
	name: "test",
	isMulti: false,
};
