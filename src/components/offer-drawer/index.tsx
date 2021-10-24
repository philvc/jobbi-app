import { Button } from "@chakra-ui/button";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Skeleton } from "@chakra-ui/skeleton";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { COLORS } from "../../constants/colors";
import { useAddCompany } from "../../services/companies/companies";
import {
  getGetOfferByIdQueryKey,
  getGetOffersBySearchIdQueryKey,
  useAddOffer,
  useDeleteOffer,
  useGetOfferById,
  useGetOffersBySearchId,
  useModifyOffer,
} from "../../services/offers/offers";
import SearchDrawerFooter from "../footer-drawer";
import SearchDrawer from "../quest-drawer";
import InputField from "../shared/form/input-field";

export enum EnumDrawerOfferFields {
  LINK = "link",
  TITLE = "title",
  DESCRIPTION = "description",
}

export type TDrawerOffer = {
  link: string;
  title: string;
  description: string;
};

export default function OfferDrawer({ isOpen, onClose }) {
  // Attributes
  const router = useRouter();
  const { questId, offerId } = router.query;
  const clientQuery = useQueryClient();

  // Put Queries
  const { mutateAsync: putOffer } = useModifyOffer();

  // Post Queries
  const { mutateAsync: postOffer } = useAddOffer();

  // Delete Query
  const { mutateAsync: deleteOffer } = useDeleteOffer();

  // Get Queries
  const { refetch: refetchOffers } = useGetOffersBySearchId(questId as string);
  const { data: offer, isLoading, refetch: refetchOffer } = useGetOfferById(
    questId as string,
    offerId as string,
    {
      query: { enabled: !!offerId },
    }
  );

  async function handleOnClose() {
    // remove query params
    if (offerId) {
      await router.push(`/home/quests/${questId}`);
    }

    // close drawer
    onClose();
  }

  async function handleSubmit(values: TDrawerOffer) {
    // Invalidate query
    clientQuery.invalidateQueries(
      getGetOffersBySearchIdQueryKey(questId as string)
    );
    if (offerId) {
      clientQuery.invalidateQueries(
        getGetOfferByIdQueryKey(questId as string, offerId as string)
      );
    }
    // Mutation
    offerId
      ? await putOffer({
          searchId: questId as string,
          offerId: offerId as string,
          data: {
            title: values.title,
            description: values.description,
            link: values.link,
          },
        })
      : await postOffer({
          searchId: questId as string,
          data: {
            title: values.title,
            description: values.description,
            link: values.link,
          },
        });

    // Refetch Companies
    if (offerId) {
      await refetchOffer();
    }
    await refetchOffers();

    // Close drawer
    handleOnClose();
  }

  // Delete offer
  async function handleDelete() {
    if (offerId) {
      await deleteOffer({
        searchId: questId as string,
        offerId: offerId as string,
      });
      await refetchOffers();
    }
    handleOnClose();
  }

  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Skeleton isLoaded={offerId ? !isLoading : true}>
          <Formik<TDrawerOffer>
            initialValues={{
              link: offer?.link,
              title: offer?.title,
              description: offer?.description,
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <DrawerHeader>
                <Heading>{`Ajouter une offre`}</Heading>
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing={8}>
                  <Text>
                    Grâce à vous, Philippe trouvera plus vite un emploi et
                    utilisera vos ressources pour y arriver. Dès que vous
                    sauvez, Philippe en sera notifié.
                  </Text>
                  <Stack spacing={4}>
                    <InputField placeholder="Titre" name="title" />
                    <InputField
                      type="textarea"
                      placeholder="Description"
                      name="description"
                    />
                    <InputField placeholder="Lien" name="link" />
                  </Stack>
                </Stack>
              </DrawerBody>

              <SearchDrawerFooter
                handleDelete={handleDelete}
                hasDelete={!!offerId}
                onClose={handleOnClose}
              />
            </Form>
          </Formik>
        </Skeleton>
      </DrawerContent>
    </Drawer>
  );
}
