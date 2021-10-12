import { ChakraProvider } from "@chakra-ui/react";
import { Meta, Story } from "@storybook/react";
import { Form, Formik } from "formik";

import InputField from ".";
import { InputFieldProps } from "./props";

//👇 This default export determines where your story goes in the story list
export default {
	title: "Components/Form/InputField",
	component: InputField,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<InputFieldProps> = (args: InputFieldProps) => (
	<ChakraProvider>
		<Formik<any> initialValues={{}} onSubmit={(values, {}) => {}}>
			<Form>
				<InputField {...args} />
			</Form>
		</Formik>
	</ChakraProvider>
);

export const Default = Template.bind({});
Default.args = {
	name: "firstName",
	placeholder: "First name",
	type: "text",
};

export const Email = Template.bind({});
Email.args = {
	name: "email",
	placeholder: "E-mail",
	type: "email",
};

export const Number = Template.bind({});
Number.args = {
	name: "age",
	placeholder: "Age",
	type: "number",
};

export const Password = Template.bind({});
Password.args = {
	name: "password",
	placeholder: "Password",
	type: "password",
};
