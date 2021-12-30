import { BoxProps, Flex, Text } from "@chakra-ui/react";
import ArrowRight from "../../icons/arrow-right";

const MoreButton = (props: BoxProps) => {
  return (
    <Flex onClick={props.onClick} alignItems="center" {...props}>
      <Text
        fontSize={"14px"}
        fontWeight={"bold"}
        marginRight={"0.5625rem"}
        color="#6772E5"
      >
        More
      </Text>
      <ArrowRight fill="#6772E5" height={"0.625rem"} width={"0.75rem"} />
    </Flex>
  );
};

export default MoreButton;
