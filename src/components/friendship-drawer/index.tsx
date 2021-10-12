import { Button } from "@chakra-ui/button";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { Form, Formik } from "formik";
import { COLORS } from "../../constants/colors";
import InputField from "../shared/form/input-field";

export default function FriendshipDrawer({ isOpen, onClose }) {
	function handleSubmit() {}

	return (
		<Formik<any> initialValues={{ email: "" }} onSubmit={handleSubmit}>
			<Form>
				<Drawer isOpen={isOpen} size="full" onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerHeader>
							<Heading>Ajouter un ami</Heading>
						</DrawerHeader>

						<DrawerBody>
							<Stack spacing={8}>
								<Text>C'est ici que vous pouvez ajouter un nouvel ami pour la recherche d'emploi.</Text>
								<Stack spacing={4}>
									<InputField placeholder="Prénom" name="firstName" />
									<InputField placeholder="Nom" name="lastName" />
									<InputField placeholder="E-mail" name="email" />
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
