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
import { useAddCompany } from "../../services/companies/companies";
import { useAddNetwork } from "../../services/networks/networks";
import { useAddOffer } from "../../services/offers/offers";
import InputField from "../shared/form/input-field";

export default function AnswerDrawer({ isOpen, onClose, type }) {
  const network = useAddNetwork();
  const offer = useAddOffer();
  const company = useAddCompany();
  const router = useRouter();
  const { questId } = router.query;

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

  async function handleSubmit(values) {

    switch(type){
    	case 0:
    		offer.mutateAsync({searchId: questId as string, data: {
    			searchId: parseInt(questId as string),
    			title: values.title,
    			description: values.description,
				link: "link alpha"
    		}});
    		break;
    	case 1:
    		company.mutateAsync({searchId: questId as string, data: {
    			searchId: parseInt(questId as string),
    			title: values.title,
    			description: values.description,
				link: "link beta"
    		}});
    		break;
    	case 2:
    	network.mutateAsync({searchId: questId as string, data: {
    		searchId: parseInt(questId as string),
    		description: values.description,
			firstName: "mlsdkfjqsmldj"
    	}});
    	break;
    }
  }

  return (
    <Drawer isOpen={isOpen} size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <Formik<{ link: string; title: string; description: string }>
          initialValues={{ link: "", title: "", description: "" }}
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
                <Button w="full" variant="outline" onClick={onClose}>
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
