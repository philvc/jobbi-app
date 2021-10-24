import { BoxProps, Flex } from "@chakra-ui/layout";
import { COLORS } from "../../../../constants/colors";

export default function Page({ children, ...rest }: BoxProps) {
  return (
    <Flex
      direction="column"
      w={"full"}
      h={"100vh"}
      background={COLORS.BACKGROUND.hex}
      display="flex"
      {...rest}
    >
      {children}
    </Flex>
  );
}
