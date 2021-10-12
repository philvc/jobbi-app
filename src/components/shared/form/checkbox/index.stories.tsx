import React from "react";
import { Story, Meta } from "@storybook/react";
import Checkbox from ".";
import CheckboxProps from "./props";
import { Form, Formik } from "formik";

export default {
	component: Checkbox,
	title: "Components/Form/Checkbox",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<CheckboxProps> = (args) => {
	return (
		<Formik<any> initialValues={{ selected: true }} onSubmit={(values, {}) => {}}>
			<Form>
				<Checkbox {...args} />
			</Form>
		</Formik>
	);
};

// Default scenario
export const Default = Template.bind({});
Default.args = {
	name: "selected",
};
