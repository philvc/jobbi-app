import Page from "../../../../components/shared/layout/page";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import { useTranslation } from "react-i18next";
import Paragraph from "../../../../components/shared/typography/paragraph";
import Heading from "../../../../components/shared/typography/heading";
import ArrowDown from "../../../../components/shared/icons/arrow-down";
import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import Cross from "../../../../components/shared/icons/cross";
import { useDisclosure } from "@chakra-ui/hooks";
import FriendshipDrawer from "../../../../components/friendship-drawer";
import AnswerDrawer from "../../../../components/answer-drawer";
import { useGetSearchById } from "../../../../services/search/search";
import { useGetOffersBySearchId } from "../../../../services/offers/offers";
import { useGetNetworksBySearchId } from "../../../../services/networks/networks";
import { useGetCompaniesBySearchId } from "../../../../services/companies/companies";
import CompanyDrawer from "../../../../components/company-drawer";
import { Skeleton } from "@chakra-ui/skeleton";

export default function Quests() {
  // Attributes
  const router = useRouter();
  const { questId, offerId, companyId, networkId } = router.query;
  const { t } = useTranslation();
  const {
    isOpen: isNewFriendOpen,
    onOpen: openNewFriend,
    onClose: closeNewFriend,
  } = useDisclosure();
  const {
    isOpen: isNewOffreOpen,
    onOpen: openNewOffre,
    onClose: closeNewOffre,
  } = useDisclosure();
  const {
    isOpen: isNewCompanyOpen,
    onOpen: openNewCompany,
    onClose: closeNewCompany,
  } = useDisclosure();
  const {
    isOpen: isNewContactOpen,
    onOpen: openNewContact,
    onClose: closeNewContact,
  } = useDisclosure();
  const { data, isLoading } = useGetSearchById(questId as string, {
    query: { enabled: !!questId },
  });
  const { data: offers, isLoading: isOffersLoading } = useGetOffersBySearchId(
    questId as string
  );
  const {
    data: networks,
    isLoading: isNetworksLoading,
  } = useGetNetworksBySearchId(questId as string);
  const {
    data: companies,
    isLoading: isCompaniesLoading,
  } = useGetCompaniesBySearchId(questId as string);

  // Function
  function handleNewAnswer() {
    router.back();
  }

  if (!data) {
    return null;
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
            <Paragraph>{data.title}</Paragraph>
          </Stack>
          <Stack>
            <Heading>Description</Heading>
            <Paragraph>{data.description}</Paragraph>
          </Stack>
          <Stack>
            <Flex justify="space-between" align="center" mr={2}>
              <Heading>Amis</Heading>
              <Cross
                onClick={openNewFriend}
                height={16}
                width={16}
                transform="rotate(45)"
              />
            </Flex>
            <Stack direction="row">
              <Avatar name="Tahir Bashir" />
              <Avatar name="Maxime Denuit" />
            </Stack>
          </Stack>
          <Stack>
            <Flex justify="space-between" align="center" mr={2}>
              <Heading>Offres</Heading>
              <Cross
                onClick={openNewOffre}
                height={16}
                width={16}
                transform="rotate(45)"
              />
            </Flex>
          </Stack>
          {offers?.map((offer) => {
            return (
              <Skeleton isLoaded={!isOffersLoading}>
                <Box
                  onClick={() =>
                    router.push(`/home/quests/${questId}?offerId=${offer.id}`)
                  }
                  cursor="pointer"
                >
                  {offer.id + offer.title}
                </Box>
              </Skeleton>
            );
          })}
          <Stack>
            <Flex justify="space-between" align="center" mr={2}>
              <Heading>Enterprises</Heading>
              <Cross
                onClick={openNewCompany}
                height={16}
                width={16}
                transform="rotate(45)"
              />
            </Flex>
          </Stack>
          {companies?.map((company) => {
            return (
              <Skeleton isLoaded={!isCompaniesLoading}>
                <Box
                  onClick={() =>
                    router.push(
                      `/home/quests/${questId}?companyId=${company.id}`
                    )
                  }
                  cursor="pointer"
                >
                  {company.id + company.title}
                </Box>
              </Skeleton>
            );
          })}
          <Stack>
            <Flex justify="space-between" align="center" mr={2}>
              <Heading>Contactes</Heading>
              <Cross
                onClick={openNewContact}
                height={16}
                width={16}
                transform="rotate(45)"
              />
            </Flex>
          </Stack>
        </Stack>
        {networks?.map((network) => {
          return (
            <Skeleton isLoaded={!isNetworksLoading}>
              <Box
                onClick={() =>
                  router.push(`/home/quests/${questId}?networkId=${network.id}`)
                }
                cursor="pointer"
              >
                {network.id + network.firstName}
              </Box>
            </Skeleton>
          );
        })}
      </Box>
      <FriendshipDrawer isOpen={isNewFriendOpen} onClose={closeNewFriend} />
      <AnswerDrawer
        type={0}
        isOpen={isNewOffreOpen || offerId}
        onClose={closeNewOffre}
      />
      <CompanyDrawer
        isOpen={isNewCompanyOpen || companyId}
        onClose={closeNewCompany}
      />
      <AnswerDrawer
        type={2}
        isOpen={isNewContactOpen}
        onClose={closeNewContact}
      />
    </Page>
  );
}
