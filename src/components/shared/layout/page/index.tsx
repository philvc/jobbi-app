import { Flex } from "@chakra-ui/layout";
import { COLORS } from "../../../../constants/colors";

export default function Page({ children, ...rest }: any) {
	return (
		<Flex {...rest} direction="column" w={"full"} h={"100vh"} background={COLORS.BACKGROUND.hex}>
			{children}
		</Flex>
	);
}
