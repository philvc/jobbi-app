import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { useRouter } from "next/router";

const OnboardingFriends = () => {

    // Attributes
    const router = useRouter();
    return (
        <Box>
            <Heading>Invite your friend to participate to your quest</Heading>

            <Button onClick={() => router.push("/onboarding/community")}>
                Next
            </Button>
        </Box>
    )
}

export default OnboardingFriends;