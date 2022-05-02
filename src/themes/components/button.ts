import { ComponentStyleConfig } from "@chakra-ui/react";
import { COLOR_SCHEME } from "../../types/constant";

export const Button: ComponentStyleConfig = {
  baseStyle: ({ theme }) => {
    return {
      ...theme.typo.headline600, // 1rem - 600
      "> span > .icon": {
        // for left/right icon
        width: "12px", // .75rem
        height: "12px", // .75rem
        color: "dark",
      },
    };
  },
  variants: {
    solid: ({ theme, colorScheme }) => {
      console.log("colorscheme", colorScheme);

      let bgOnHover = "";
      let bg = "";
      let color = "";
      if (colorScheme === COLOR_SCHEME.PRIMARY) {
        bgOnHover = "#6772E5";
        bg = "#6772E5";
        color = "white";
      }
      return {
        padding: "1rem",
        margin: "auto",
        borderRadius: "12px",
        color: color,
        backgroundColor: bg,
        _hover: {
          bg: bgOnHover,
        },
        _active: {
          outline: "none !important",
        },
        _focus: {
          outline: "none !important",
          borderWidth: 0,
        },
      };
    },
  },
  defaultProps: {
    size: "base",
    variant: "solid",
    colorScheme: "primary",
  },
};
