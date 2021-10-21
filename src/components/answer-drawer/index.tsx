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
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { COLORS } from "../../constants/colors";
import {
  useAddCompany,
  useGetCompanyById,
  useModifyCompany,
} from "../../services/companies/companies";
import {
  useAddNetwork,
  useGetNetworkById,
  useModifyNetwork,
} from "../../services/networks/networks";
import {
  useAddOffer,
  useGetOfferById,
  useModifyOffer,
} from "../../services/offers/offers";
import InputField from "../shared/form/input-field";

export type AnswerDrawerType = {
  link: string;
  title: string;
  description: string;
};

export default function AnswerDrawer({ isOpen, onClose, type }) {
  // Attributes
  const router = useRouter();
  const { questId, offerId, companyId, networkId } = router.query;

  // Put Queries
  const putNetwork = useModifyNetwork();
  const putCompany = useModifyCompany();
  const putOffer = useModifyOffer();

  // Post Queries
  const network = useAddNetwork();
  const offer = useAddOffer();
  const company = useAddCompany();

  // Get By Id
  const o = useGetOfferById(questId as string, offerId as string, {
    query: { enabled: !!offerId },
  });
  const c = useGetCompanyById(questId as string, companyId as string, {
    query: { enabled: !!companyId },
  });
  const n = useGetNetworkById(questId as string, networkId as string, {
    query: { enabled: !!networkId },
  });


  // Form initial values
  const title = o?.data?.title || c?.data?.title || n?.data?.firstName || "";
  const description =
    o?.data?.description || c?.data?.description || n?.data?.description || "";

  console.log("titel", title);

  function getAnswerType() {
    switch (type) {
      case 0:
        return "une offre";
      case 1:
        return "une entreprise";
      case 2:
        return "un contact";
    }
  }

  async function handleOnClose() {
    // remove query params
    if (offerId || networkId || companyId) {
      await router.push(`/home/quests/${questId}`);
    }

    // close drawer
    onClose();
  }

  async function handleSubmit(values: AnswerDrawerType) {
    switch (type) {
      case 0:
        offer.mutateAsync({
          searchId: questId as string,
          data: {
            searchId: parseInt(questId as string),
            title: values.title,
            description: values.description,
            link: values.link,
          },
        });
        break;
      case 1:
        company.mutateAsync({
          searchId: questId as string,
          data: {
            searchId: parseInt(questId as string),
            title: values.title,
            description: values.description,
            link: values.link,
          },
        });
        break;
      case 2:
        network.mutateAsync({
          searchId: questId as string,
          data: {
            searchId: parseInt(questId as string),
            description: values.description,
            firstName: values.title,
          },
        });
        break;
    }
  }

  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Formik<AnswerDrawerType>
          initialValues={{ link: "", title: title, description: "" }}
          onSubmit={handleSubmit}
        >
          <Form>
            <DrawerHeader>
              <Heading>{`Ajouter ${getAnswerType()}`}</Heading>
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing={8}>
                <Text>
                  Grâce à vous, Philippe trouvera plus vite un emploie et
                  utilisera vos ressources pour y arriver. Dès que vous sauvez,
                  Philippe en sera notifié.
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

            <DrawerFooter>
              <Stack w="full" direction="row" spacing={4}>
                <Button w="full" variant="outline" onClick={handleOnClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  bg={COLORS.BLUE.T500.hex}
                  color={COLORS.WHITE.hex}
                  w="full"
                >
                  Sauver
                </Button>
              </Stack>
            </DrawerFooter>
          </Form>
        </Formik>
      </DrawerContent>
    </Drawer>
  );
}
