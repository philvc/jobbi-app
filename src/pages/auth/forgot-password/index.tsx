import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import Paragraph from "../../../components/shared/typography/paragraph";
import Heading from "../../../components/shared/typography/heading";
import InputField from "../../../components/shared/form/input-field";
import { Form, Formik, FormikContext } from "formik";
import Button from "../../../components/shared/actions/button";
import UserDTO from "../../../types/UserDTO";
import ArrowDown from "../../../components/shared/icons/arrow-down";
import { useSupabase } from "use-supabase";

export default function SignIn() {
	// Attributes
	const router = useRouter();
	const { t } = useTranslation();
	const { auth } = useSupabase();

	// Function
	function handleSubmit(data: UserDTO) {
		auth.api.resetPasswordForEmail(data.email);
	}

	return (
		<Formik<UserDTO> initialValues={{ firstName: "", lastName: "", email: "", password: "" }} onSubmit={handleSubmit}>
			<Form>
				<Page p={4} justify="space-between">
					<Box>
						<Stack onClick={router.back} direction="row" spacing={2} align="center">
							<ArrowDown style={{ marginTop: -1 }} height="16px" width="16px" transform="rotate(90)" />
							<Heading>Mot de passe oublié</Heading>
						</Stack>
						<Stack mt={8} spacing={4}>
							<InputField placeholder="E-mail" name="email" />
							<Button text="Récuperer" />
						</Stack>
					</Box>
				</Page>
			</Form>
		</Formik>
	);
}
