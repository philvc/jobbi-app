import Page from "../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/layout";
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
import { FONT_SIZES } from "../../../constants/typography";

export default function SignIn() {
	// Attributes
	const router = useRouter();
	const { t } = useTranslation();
	const { auth } = useSupabase();
	const toast = useToast();

	// Function
	async function handleSubmit(data: UserDTO) {
		const signInResponse = await auth.signIn({ email: data.email, password: data.password });

		if (signInResponse.error) {
			toast({ title: "Mauvaise combinaison" });
			return;
		}

		localStorage.setItem("ACCESS_TOKEN", signInResponse.data.access_token);

		router.push("/home");
	}

	function handleSignUp() {
		router.push("/auth/sign-up");
	}

	function handleForgotPassword() {
		router.push("/auth/forgot-password");
	}

	return (
		<Formik<UserDTO> initialValues={{ firstName: "", lastName: "", email: "", password: "" }} onSubmit={handleSubmit}>
			<Form>
				<Page p={4} justify="space-between">
					<Box>
						<Heading>Se connecter</Heading>
						<Stack mt={8} spacing={4}>
							<InputField placeholder="E-mail" name="email" />
							<Stack>
								<InputField placeholder="Mot de passe" name="password" />
								<Text onClick={handleForgotPassword} fontSize={FONT_SIZES.SMALL} align="right">
									Mot de passe oublié
								</Text>
							</Stack>
							<Button text="Se connecter" />
						</Stack>
						<Flex onClick={handleSignUp} justify="center" mt={4}>
							<Text>S'inscrire</Text>
						</Flex>
					</Box>
				</Page>
			</Form>
		</Formik>
	);
}
