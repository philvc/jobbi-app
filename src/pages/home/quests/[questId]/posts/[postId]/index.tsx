import {
  Box,
  Button,
  useDisclosure,
  Image,
  Text,
  Skeleton,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import AddCrossIcon from "../../../../../../components/shared/icons/add-cross";
import Page from "../../../../../../components/shared/layout/page";
import { useGetCommentsForPost } from "../../../../../../services/comments/comments";
import { useGetPostById } from "../../../../../../services/posts/posts";
import AddCommentModal from "./components/add-modal";
import CommentCard from "./components/comment";

const PostDetails = () => {
  // Attributes
  const router = useRouter();
  const { questId, postId } = router.query;

  /* POST*/
  const { data: post, isLoading: postIsLoading } = useGetPostById(
    questId as string,
    postId as string,
    {
      query: { enabled: !!questId && !!postId },
    }
  );

  /* COMMENTS */
  const {
    data: comments,
    isLoading: isCommentsLoading,
    refetch: refetchComments,
  } = useGetCommentsForPost(questId as string, postId as string, {
    query: { enabled: !!postId && !!questId },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("post ur", !!post?.url);

  return (
    <Page overflow={"scroll"}>
      <Box>
        <Box
          bg={"rgba(57, 51, 96, 0.1)"}
          borderRadius={".5rem"}
          width={"2rem"}
          minHeight={"2rem"}
          display="flex"
          onClick={router.back}
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

        <Skeleton
          isLoaded={!postIsLoading}
          mx={postIsLoading ? "24px" : "0"}
          h={postIsLoading ? "100px" : "fit-content"}
        >
          <Box mx={"24px"}>
            <Text
              mb={"14px"}
              color={"#393360"}
              fontWeight="700"
              fontSize={"20px"}
            >
              Titre
            </Text>
            <Text>{post?.title ? post?.title : "Pas de titre"}</Text>
            <Text
              mb={"14px"}
              color={"#393360"}
              fontWeight="700"
              fontSize={"20px"}
              mt={"14px"}
            >
              Description
            </Text>
            <Text>
              {post?.description ? post?.description : "Pas de description"}
            </Text>
            <Text
              mb={"14px"}
              color={"#393360"}
              fontWeight="700"
              fontSize={"20px"}
              mt={"14px"}
            >
              Lien
            </Text>
            <Text>{post?.url ? post?.url : "Pas de lien"}</Text>
          </Box>
        </Skeleton>

        {comments?.map((comment) => {
          return <CommentCard key={comment?.id} comment={comment} />;
        })}
        {isOpen && <AddCommentModal onClose={onClose} />}

        <Box
          justifyContent={"center"}
          bgColor={"#6772E5"}
          borderRadius={"12px"}
          mx={"1.5rem"}
          height={"48px"}
          display={"flex"}
          alignItems={"center"}
          mt={"50px"}
          onClick={onOpen}
        >
          <Flex alignItems={"center"}>
            <AddCrossIcon width={"21px"} height={"20px"} />
            <Text ml="4px" color="white" fontWeight={"500"} fontSize={"16px"}>
              Ajouter un commentaire
            </Text>
          </Flex>
        </Box>
      </Box>
    </Page>
  );
};

export default PostDetails;
