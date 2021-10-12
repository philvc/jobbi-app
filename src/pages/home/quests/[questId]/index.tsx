import Page from "../../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import Paragraph from "../../../../components/shared/typography/paragraph";
import Heading from "../../../../components/shared/typography/heading";
import InputField from "../../../../components/shared/form/input-field";
import { Form, Formik, FormikContext } from "formik";
import Button from "../../../../components/shared/actions/button";
import UserDTO from "../../../../types/UserDTO";
import ArrowDown from "../../../../components/shared/icons/arrow-down";
import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import Cross from "../../../../components/shared/icons/cross";
import { useDisclosure } from "@chakra-ui/hooks";
import FriendshipDrawer from "../../../../components/friendship-drawer";
import AnswerDrawer from "../../../../components/answer-drawer";

export default function Quests() {
	// Attributes
	const router = useRouter();
	const { questId } = router.query;
	const { t } = useTranslation();
	const { isOpen: isNewFriendOpen, onOpen: openNewFriend, onClose: closeNewFriend } = useDisclosure();
	const { isOpen: isNewOffreOpen, onOpen: openNewOffre, onClose: closeNewOffre } = useDisclosure();
	const { isOpen: isNewCompanyOpen, onOpen: openNewCompany, onClose: closeNewCompany } = useDisclosure();
	const { isOpen: isNewContactOpen, onOpen: openNewContact, onClose: closeNewContact } = useDisclosure();

	// Function
	function handleNewAnswer() {
		router.back();
	}

	return (
		<Page p={4} justify="space-between">
			<Box>
				<Stack onClick={router.back} direction="row" spacing={2} align="center">
					<ArrowDown height="16px" width="16px" transform="rotate(90)" />
				</Stack>
				<Stack mt={8} spacing={5}>
					<Stack>
						<Heading>Titre</Heading>
						<Paragraph>Blabla</Paragraph>
					</Stack>
					<Stack>
						<Heading>Description</Heading>
						<Paragraph>Blabla</Paragraph>
					</Stack>
					<Stack>
						<Flex justify="space-between" align="center" mr={2}>
							<Heading>Amis</Heading>
							<Cross onClick={openNewFriend} height={16} width={16} transform="rotate(45)" />
						</Flex>
						<Stack direction="row">
							<Avatar name="Tahir Bashir" />
							<Avatar name="Maxime Denuit" />
						</Stack>
					</Stack>
					<Stack>
						<Flex justify="space-between" align="center" mr={2}>
							<Heading>Offres</Heading>
							<Cross onClick={openNewOffre} height={16} width={16} transform="rotate(45)" />
						</Flex>
					</Stack>
					<Stack>
						<Flex justify="space-between" align="center" mr={2}>
							<Heading>Enterprises</Heading>
							<Cross onClick={openNewCompany} height={16} width={16} transform="rotate(45)" />
						</Flex>
					</Stack>
					<Stack>
						<Flex justify="space-between" align="center" mr={2}>
							<Heading>Contactes</Heading>
							<Cross onClick={openNewContact} height={16} width={16} transform="rotate(45)" />
						</Flex>
					</Stack>
				</Stack>
			</Box>
			<FriendshipDrawer isOpen={isNewFriendOpen} onClose={closeNewFriend} />
			<AnswerDrawer type={0} isOpen={isNewOffreOpen} onClose={closeNewOffre} />
			<AnswerDrawer type={1} isOpen={isNewCompanyOpen} onClose={closeNewCompany} />
			<AnswerDrawer type={2} isOpen={isNewContactOpen} onClose={closeNewContact} />
		</Page>
	);
}
