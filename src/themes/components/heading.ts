
export const Heading = {
    baseStyle: ({theme})=> ({fontFamily: theme.fonts.poppins}) ,
    sizes: {
        '900': ({theme}) => theme.typo?.headline900,
        '800': ({theme}) => theme.typo?.headline800,
        '700': ({theme}) => theme.typo?.headline700,
        '600': ({theme}) => theme.typo?.headline600,
        '500': ({theme}) => theme.typo?.headline500,
        '400': ({theme}) => theme.typo?.headline400
     }
     
}