import Page from "../../components/shared/layout/page";
import { useRouter } from "next/router";
import React from "react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import Paragraph from "../../components/shared/typography/paragraph";
import Heading from "../../components/shared/typography/heading";
import InputField from "../../components/shared/form/input-field";
import { Form, Formik } from "formik";
import User from "../../components/shared/icons/user";
import Button from "../../components/shared/actions/button";
import Cross from "../../components/shared/icons/cross";
import { useGetSearches } from "../../services/searches/searches";

export default function Home() {
	// Attributes
	const router = useRouter();
	const { t } = useTranslation();
	const {data} = useGetSearches();
	console.log("d");
	
	function handleProfileClicked() {
		router.push("/home/profile");
	}

	function handleNewQuestClicked() {
		router.push("/home/quests");
	}

	function handleQuestClicked(id: string) {
		router.push(`/home/quests/${id}`);
	}

	return (
		<Page>
			<Flex justify="End" p={4}>
				<Box onClick={handleProfileClicked}>
					<User width={25} height={25} />
				</Box>
			</Flex>
			<Stack mt={2} spacing={4} pl={4}>
				<Stack spacing={2}>
					<Flex justify="space-between" align="center" mr={2}>
						<Heading>Mes recherches</Heading>
						<Cross onClick={handleNewQuestClicked} height={16} width={16} transform="rotate(45)" />
					</Flex>
					<Stack direction="row" spacing={2} overflow="auto">
						{data?.map((search) => {
							return (
								<Box onClick={() => handleQuestClicked("1")} h={40} minW={32} bg="red" p={2}>
								<Heading type={4}>{search.title}</Heading>
							</Box>		
							)
						})}
					</Stack>
				</Stack>
				<Box>
					<Heading>Mes amis</Heading>
					<Stack direction="row" spacing={2}></Stack>
				</Box>
				<Box>
					<Heading>Mes invitations</Heading>
					<Stack direction="row" spacing={2}></Stack>
				</Box>
			</Stack>
		</Page>
	);
}
