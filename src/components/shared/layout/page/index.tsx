import { BoxProps, Flex } from "@chakra-ui/layout";

export default function Page({ children, ...rest }: BoxProps) {
  return (
    <Flex
      direction="column"
      w={"full"}
      h={"100vh"}
      background={"#F8F9FC"}
      display="flex"
      {...rest}
    >
      {children}
    </Flex>
  );
}
