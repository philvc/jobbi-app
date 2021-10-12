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

export default function Quests() {
	// Attributes
	const router = useRouter();

	return (
		<Page p={4} justify="space-between">
			<Box>
				<Stack onClick={router.back} direction="row" spacing={2} align="center">
					<ArrowDown style={{ marginTop: -1 }} height="16px" width="16px" transform="rotate(90)" />
					<Heading>Nouvelle quête</Heading>
				</Stack>
				<Stack mt={8} spacing={4}>
					<InputField placeholder="Titre" name="title" />
					<InputField placeholder="Description" name="description" />
				</Stack>
			</Box>
			<Button text="Sauver" />
		</Page>
	);
}
