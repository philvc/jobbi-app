import { Heading, Flex, Text, Box, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Page from "../../../components/shared/layout/page";
import Navbar from "../../../components/shared/navbar";
import { useGetPublicSearches } from "../../../services/searches/searches";
import PublicQuestCard from "./card";

const ExplorePage = () => {
  // Attributes
  const router = useRouter();
  const { data, isLoading } = useGetPublicSearches();
  const list = new Array(10).fill(undefined);

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

      {data &&
        list.map(() =>
          data?.map((quest, index) => {
            return <PublicQuestCard index={index} quest={quest} />;
          })
        )}
      {/* // data?.map((quest, index) => {
        //   return <PublicQuestCard index={index} quest={quest} />;
        // })} */}
      <Navbar menu="explore" />
    </Page>
  );
};

export default ExplorePage;
