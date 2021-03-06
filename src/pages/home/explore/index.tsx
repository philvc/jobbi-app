import { Heading, Flex, Text, Box, Image, Skeleton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Page from "../../../components/shared/layout/page";
import Navbar from "../../../components/shared/navbar";
import { useGetPublicSearches } from "../../../services/searches/searches";
import PublicQuestCard from "./card";
import { getAuthRedirect } from "../../../utils/auth";

export const getServerSideProps = getAuthRedirect;

const ExplorePage = () => {
  // Attributes
  const router = useRouter();
  const { data, isLoading } = useGetPublicSearches();

  function redirectHome() {
    router.push("/home");
  }

  return (
    <Page overflow={"scroll"} pb={"6.3125rem"}>
      <Box
        bg={"rgba(57, 51, 96, 0.1)"}
        borderRadius={".5rem"}
        width={"2rem"}
        minHeight={"2rem"}
        display="flex"
        onClick={redirectHome}
        mx={"24px"}
        mb={"32px"}
        mt={"4rem"}
      >
        <Image
          alignSelf={"center"}
          margin="auto"
          src={"/assets/icons/arrow.svg"}
          height={".75rem"}
          width={".75rem"}
        />
      </Box>
      <Text
        mb={"16px"}
        mx={"24px"}
        color={"#393360"}
        fontWeight="700"
        fontSize={"20px"}
      >
        Explore
      </Text>

      <Skeleton
        isLoaded={!isLoading}
        mx={isLoading ? "24px" : "0"}
        h={isLoading ? "150px" : "fit-f"}
      >
        {data?.map((quest, index) => {
          return <PublicQuestCard index={index} quest={quest} />;
        })}
      </Skeleton>
      <Navbar menu="explore" />
    </Page>
  );
};

export default ExplorePage;
