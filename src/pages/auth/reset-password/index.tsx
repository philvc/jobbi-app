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
	const { auth } = useSupabase();

	// Function
	async function handleSubmit(data: UserDTO) {
		const resetResp = await auth.api.updateUser(localStorage.getItem("ACCESS_TOKEN"), { password: data.password });
		if (resetResp.error) {
			return;
		}
		router.push("/home");
	}

	return (
		<Formik<UserDTO> initialValues={{ firstName: "", lastName: "", email: "", password: "" }} onSubmit={handleSubmit}>
			<Form>
				<Page p={4} justify="space-between">
					<Box>
						<Stack onClick={router.back} direction="row" spacing={2} align="center">
							<ArrowDown style={{ marginTop: -1 }} height="16px" width="16px" transform="rotate(90)" />
							<Heading>Mettre à jour le mot de passe</Heading>
						</Stack>
						<Stack mt={8} spacing={4}>
							<InputField placeholder="Mot de passe" name="password" />
							<Button text="Se connecter" />
						</Stack>
					</Box>
				</Page>
			</Form>
		</Formik>
	);
}
