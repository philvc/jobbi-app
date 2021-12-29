import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { useRouter } from "next/router";

const OnboardingWelcome = () => {

    // Attributes
    const router = useRouter();
    return (
        <Box>
            <Heading>Welcome to Jobbi</Heading>
            <Text>Jobbi helps you to find your next job with your friends !</Text>
            <Button onClick={() => router.push("/onboarding/quest")}>
                Next
            </Button>
        </Box>
    )
}

export default OnboardingWelcome;