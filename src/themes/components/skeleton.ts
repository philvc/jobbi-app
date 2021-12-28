import { fade } from "../../utils/animation";

export const Skeleton = {
  baseStyle: ({
    isLoaded,
    speed,
  }) => {
    return {
      isLoaded,
      // skeleton animation
      opacity: 0.7,
      borderRadius: '0.125rem',
      borderColor: '#EDEFF5',
      background: '#E6E8F0',
      animation: `${speed}s linear infinite alternate ${fade(
        '#EDEFF5',
        '#E6E8F0',
      )}`,
    };
  },
  defaultProps: {
    colorScheme: 'neutral',
    speed: 1.5,
  },
};
