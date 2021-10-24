import { motion } from "framer-motion";
import { ButtonProps } from "./props";
import { Button as ChakraButton } from "@chakra-ui/button";
import { COLORS } from "../../../../constants/colors";

const Button = ({
  variant = "primary",
  text,
  onClick,
  type = "submit",
  ...rest
}: ButtonProps) => {
  // Functions
  const getBackgroundColor = (
    state: "normal" | "hovered" | "focused" = "normal"
  ) => {
    switch (variant) {
      case "primary":
        switch (state) {
          case "hovered":
            return COLORS.BLUE.T400.hex;
          case "focused":
            return COLORS.BLUE.T600.hex;
          case "normal":
          default:
            return COLORS.GREEN.T800.hex;
        }
      case "danger":
        switch (state) {
          case "hovered":
            return COLORS.DANGER.T400.hex;
          case "focused":
            return COLORS.DANGER.T600.hex;
          case "normal":
          default:
            return COLORS.DANGER.T500.hex;
        }
      case "outline":
        return COLORS.TRANSPARENT.hex;
    }
  };

  const getOutline = () => {
    switch (variant) {
      case "primary":
        return `2px solid ${COLORS.BLUE.T100.hex}`;
      case "danger":
        return `2px solid ${COLORS.DANGER.T100.hex}`;
      case "outline":
        return `2px solid ${COLORS.BLUE.T600.hex}`;
    }
  };

  const getBorder = () => {
    switch (variant) {
      case "outline":
        return `2px solid ${COLORS.BLUE.T400.hex}`;
      case "danger":
        return `2px solid ${COLORS.TRANSPARENT.hex}`;
      default:
        return `2px solid ${COLORS.TRANSPARENT.hex}`;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "primary":
      case "danger":
        return COLORS.WHITE.hex;
      case "outline":
        return COLORS.BLUE.T500.hex;
    }
  };

  return (
    <ChakraButton
      type={type}
      border={getBorder()}
      color={getTextColor()}
      _hover={{ bg: getBackgroundColor("hovered") }}
      _focus={{ border: getOutline() }}
      _active={{ bg: getBackgroundColor("focused") }}
      bg={getBackgroundColor()}
      onClick={onClick}
    >
      {text}
    </ChakraButton>
  );
};
export default Button;
