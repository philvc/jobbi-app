import { Browser } from "@capacitor/browser";
import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEventHandler } from "react";
import EditPostDrawer from "../../../../../../../components/edit-post-drawer";
import { OldAvatar } from "../../../../../../../components/shared/icons/old-avatar";
import { PostDTOBySearchId } from "../../../../../../../types/dtos";

interface QuestPostCardProps {
  post: PostDTOBySearchId;
}

const QuestPostCard = ({ post }: QuestPostCardProps) => {
  // Attributes
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { questId } = router.query;

  // Handlers
  function handleLink(e: any): MouseEventHandler<HTMLDivElement> {
    // Stop event
    e.stopPropagation();

    Browser.open({
      url: post?.url,
    });
    return;
  }
  return (
    <>
      <Box
        minW={"280px"}
        bgColor={"white"}
        boxShadow={
          "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)"
        }
        borderRadius={"0.75rem"}
        p={"1rem"}
        onClick={() => router.push(`/home/quests/${questId}/posts/${post?.id}`)}
        cursor={"pointer"}
      >
        <Text color="#393360" fontSize={"16px"} fontWeight={"bold"}>
          {post?.title}
        </Text>
        <Text mt="1rem" color="#393360" fontSize={"14px"} fontWeight={"normal"}>
          {post?.description}
        </Text>
        <Flex
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={"1.5rem"}
        >
          <Flex alignItems={"center"} direction={"row"}>
            <Box
              borderRadius={"4.75px"}
              width={"19px"}
              height={"19px"}
              bgColor={"#5D44F2"}
            >
              <OldAvatar />
            </Box>
            <Text
              fontSize={"12px"}
              color={"#8F95B2"}
              ml={"4px"}
            >{`${post?.userFirstName} ${post?.userLastName}`}</Text>
          </Flex>
          {post?.url && (
            <Box onClick={handleLink}>
              <Text color="#393360" fontSize={"16px"} fontWeight={"bold"}>
                LINK
              </Text>
            </Box>
          )}
        </Flex>
      </Box>
      <EditPostDrawer isOpen={isOpen} onClose={onClose} post={post} />
    </>
  );
};

export default QuestPostCard;
