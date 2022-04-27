import { keyframes } from "@emotion/react";

export const fade = (startColor: string, endColor: string) =>
  keyframes({
    from: { borderColor: startColor, background: startColor },
    to: { borderColor: endColor, background: endColor },
  });

export const Skeleton = {
  baseStyle: ({
    isLoaded,
    speed,
    startColor = "#EDEFF5",
    endColor = "#E6E8F0",
  }) => {
    return {
      height: "0.688rem",
      isLoaded,

      // skeleton animation
      opacity: 0.7,
      borderRadius: "0.125rem",
      borderColor: "#EDEFF5",
      background: "#E6E8F0",
      animation: `${speed}s linear infinite alternate ${fade(
        startColor,
        endColor
      )}`,
    };
  },
  defaultProps: {
    colorScheme: "neutral",
    speed: 1.5,
  },
};
