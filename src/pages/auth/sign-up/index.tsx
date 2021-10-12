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
import { useToast } from "@chakra-ui/toast";

export default function SignIn() {
	// Attributes
	const router = useRouter();
	const { auth } = useSupabase();
	const toast = useToast();

	// Function
	async function handleSubmit(data: UserDTO) {
		console.log("shit");
		const signUpResponse = await auth.signUp({ email: data.email, password: data.password });

		if (signUpResponse.error) {
			toast({ title: "Impossible de créer le compte" });
			return;
		}

		const signInResponse = await auth.signIn({ email: data.email, password: data.password });
		localStorage.setItem("ACCESS_TOKEN", signInResponse.data.access_token);

		// Create user in the API
		router.push("/home");
	}

	return (
		<Formik<UserDTO> initialValues={{ firstName: "", lastName: "", email: "", password: "" }} onSubmit={handleSubmit}>
			<Form>
				<Page p={4} justify="space-between">
					<Box>
						<Stack direction="row" spacing={2} align="center">
							<ArrowDown onClick={router.back} style={{ marginTop: -1 }} height="16px" width="16px" transform="rotate(90)" />
							<Heading>S'inscrire</Heading>
						</Stack>
						<Stack mt={8} spacing={4}>
							<InputField placeholder="E-mail" name="email" />
							<InputField placeholder="Mot de passe" name="password" type="password" />
							<InputField placeholder="Confirmer mot de passe" name="confirm-password" type="password" />
							<Button type="submit" text="S'inscrire" />
						</Stack>
					</Box>
				</Page>
			</Form>
		</Formik>
	);
}
