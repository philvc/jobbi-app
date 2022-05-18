import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { OldAvatar } from "../../../../../../../../components/shared/icons/old-avatar";
import { useUser } from "../../../../../../../../contexts/user";
import {
  getGetCommentsForPostQueryKey,
  useDeteCommentById,
} from "../../../../../../../../services/comments/comments";
import { CommentForPostDto } from "../../../../../../../../types/dtos";
import EditCommentModal from "../edit-modal";

interface CommentCardProps {
  comment: CommentForPostDto;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  // Attributes
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box
        minW={"200px"}
        maxW={"17.5rem"}
        bgColor={"white"}
        boxShadow={
          "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)"
        }
        borderRadius={"0.75rem"}
        p={"1rem"}
        onClick={onOpen}
        cursor={"pointer"}
      >
        <Text
          noOfLines={3}
          color="#393360"
          fontSize={"14px"}
          fontWeight={"normal"}
          maxH={"11.4375rem"}
        >
          {comment?.content}
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
            >{`${comment?.firstName} ${comment?.lastName}`}</Text>
          </Flex>
        </Flex>
      </Box>
      {isOpen && (
        <EditCommentModal isOpen={isOpen} onClose={onClose} comment={comment} />
      )}
    </>
  );
};

export default CommentCard;
