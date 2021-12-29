import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { useRouter } from "next/router";

const OnboardingCommunity = () => {

    // Attributes
    const router = useRouter();
    return (
        <Box>
            <Heading>Join a quest as friend or as a follower</Heading>
            <Text>In jobbi you will be invited to help your friend</Text>
            <Text>You can also find public quest and decide to follow them to help each other !</Text>
            <Button onClick={() => router.push("/auth/sign-up")}>
                Next
            </Button>
        </Box>
    )
}

export default OnboardingCommunity;