import { Heading, Flex, Box } from "@chakra-ui/react";
import Page from "../../../components/shared/layout/page";
import { useGetPublicSearches } from "../../../services/searches/searches";
import PublicQuestCard from "./card";

const ExplorePage = () => {
  // Attributes
  const { data, isLoading } = useGetPublicSearches();

  return (
    <Page>
      <Heading>Explore</Heading>

      {data && data?.map((quest, index) => {
        return <PublicQuestCard index={index} quest={quest} />;
      })}
    </Page>
  );
};

export default ExplorePage;
