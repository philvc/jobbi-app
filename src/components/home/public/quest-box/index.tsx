import { Box, BoxProps } from "@chakra-ui/react"

const PublicQuestBox = ({children, ...rest}: BoxProps) => {
    return(
        <Box mb={rest.mb} mx={rest.mx}>
            {children}
        </Box>
    )
}

export default PublicQuestBox;