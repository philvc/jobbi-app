import { Box, BoxProps } from "@chakra-ui/react";



const SharedQuestBox = ({children, ...rest}: BoxProps) => {
    return (
        <Box mb={rest.mb} ml={rest.ml}>
            {children}
        </Box>
    )
}

export default SharedQuestBox;