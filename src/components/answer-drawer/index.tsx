import { Button } from "@chakra-ui/button";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { Form, Formik } from "formik";
import { COLORS } from "../../constants/colors";
import InputField from "../shared/form/input-field";

export default function AnswerDrawer({ isOpen, onClose, type }) {
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

	function handleSubmit() {}

	return (
		<Formik<any> initialValues={{ link: "", title: "", description: "" }} onSubmit={handleSubmit}>
			<Form>
				<Drawer isOpen={isOpen} size="full" onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerHeader>
							<Heading>{`Ajouter ${getAnswerType()}`}</Heading>
						</DrawerHeader>

						<DrawerBody>
							<Stack spacing={8}>
								<Text>Grâce à vous, Philippe trouvera plus vite un emploie et utilisera vos ressources pour y arriver. Dès que vous sauvez, Philippe en sera notifié.</Text>
								<Stack spacing={4}>
									<InputField placeholder="Titre" name="title" />
									<InputField type="textarea" placeholder="Description" name="description" />
									<InputField placeholder="Lien" name="link" />
								</Stack>
							</Stack>
						</DrawerBody>

						<DrawerFooter>
							<Stack w="full" direction="row" spacing={4}>
								<Button w="full" variant="outline" onClick={onClose}>
									Cancel
								</Button>
								<Button bg={COLORS.BLUE.T500.hex} color={COLORS.WHITE.hex} w="full">
									Sauver
								</Button>
							</Stack>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</Form>
		</Formik>
	);
}
