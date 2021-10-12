import Page from "../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Container, Flex, Stack } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import Paragraph from "../components/shared/typography/paragraph";
import Heading from "../components/shared/typography/heading";
import InputField from "../components/shared/form/input-field";
import { Form, Formik } from "formik";
import Button from "../components/shared/actions/button";

export default function Home() {
	// Attributes
	const router = useRouter();
	const { t } = useTranslation();

	return (
		<Formik<any> initialValues={{ tahir: "0494903665" }} onSubmit={(data) => alert(data.tahir)}>
			<Form>
				<Page p={4}>
					<Stack spacing={4}>
						<InputField placeholder="Numéro de téléphone" name="tahir" />
						<InputField type="password" placeholder="Mot de passe" name="tahir" />
						<Button type="submit" text="Se connecter" />
					</Stack>
				</Page>
			</Form>
		</Formik>
	);
}
