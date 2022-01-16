import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SearchDrawer from "../../../../../../components/quest-drawer";
import Icons from "../../../../../../components/shared/icons";
import EditPen from "../../../../../../components/shared/icons/edit-pen";
import ShareIcon from "../../../../../../components/shared/icons/share";
import { useUser } from "../../../../../../contexts/user";
import { SearchDTO } from "../../../../../../types/dtos";
import { Browser } from "@capacitor/browser";
import { EnumReferer } from "../../../../../../constants/enums";

interface QuestDetailsHeaderIconsTopBarProps {
  quest: SearchDTO;
}

const QuestDetailsHeaderIconsTopBar = ({
  quest,
}: QuestDetailsHeaderIconsTopBarProps) => {
  // Attributes
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { id } = useUser();
  const isOwner = quest?.userId === id;
  const referer = router.query.referer as string;


  // Handlers
  async function handleShare() {
    await Browser.open({
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/join/${quest.id}`,
    });
  }

  function handleGoBack(){
    switch(referer){
      case EnumReferer.EXPLORE:
        return router.push('/home/explore');
      case EnumReferer.SIGNUP:
      case EnumReferer.HOME:
      default:
        return router.push('/home')
    }
  }
  return (
    <>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          bgColor={"rgba(255, 255, 255, 0.1)"}
          borderRadius={"0.5rem"}
          backdropFilter={"blur(8px)"}
          width={"2rem"}
          height={"2rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={handleGoBack}
        >
          <Icons.BackArrow
            style={{ margin: "auto", alignSelf: "center" }}
            fill="white"
            width={"0.875rem"}
            height={"0.75rem"}
          />
        </Box>
        {isOwner && (
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Box
              bgColor={"rgba(255, 255, 255, 0.1)"}
              borderRadius={"0.5rem"}
              backdropFilter={"blur(8px)"}
              width={"2rem"}
              height={"2rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={onOpen}
              marginRight={"0.25rem"}
            >
              <EditPen fill="white" height={"1rem"} width={"1rem"} />
            </Box>
            <Box
              bgColor={"rgba(255, 255, 255, 0.1)"}
              borderRadius={"0.5rem"}
              backdropFilter={"blur(8px)"}
              width={"2rem"}
              height={"2rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={handleShare}
            >
              <ShareIcon fill="white" height={"1rem"} width={"1rem"} />
            </Box>
          </Flex>
        )}
      </Flex>
      <SearchDrawer quest={quest} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default QuestDetailsHeaderIconsTopBar;
