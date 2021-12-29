import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { useRouter } from "next/router";

const OnboardingQuest = () => {

    // Attributes
    const router = useRouter();
    return (
        <Box>
            <Heading>Create you quest !</Heading>
            <Text>If you are looking for a job, create your quest in Jobbi and invite your friends to help you !</Text>

            <Button onClick={() => router.push("/onboarding/friends")}>
                Next
            </Button>
        </Box>
    )
}

export default OnboardingQuest;