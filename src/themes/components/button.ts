import { COLORS } from "../../constants/colors";

export const Button = {
    baseStyle: ({theme})=>{
        return {
            ...theme.typo.headline600, // 16px - 600
            color: "white",
            borderRadius: '10px',
            '> span > .icon': {
              // for left/right icon
              width: '.75rem', // 12px
              height: '.75rem', // 12px
            },
          };
    },
    
     
}