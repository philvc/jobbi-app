import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Icons from "../../../../../../components/shared/icons";
import EditPen from "../../../../../../components/shared/icons/edit-pen";
import ShareIcon from "../../../../../../components/shared/icons/share";

const QuestDetailsHeaderIconsTopBar = () => {
  // Attributes
  const router = useRouter();
  return (
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
        onClick={() => router.back()}
      >
        <Icons.BackArrow
          style={{ margin: "auto", alignSelf: "center" }}
          fill="white"
          width={"0.875rem"}
          height={"0.75rem"}
        />
      </Box>
      <Flex direction={"row"} alignItems={"center"} justifyContent={"flex-end"}>
        <Box
          bgColor={"rgba(255, 255, 255, 0.1)"}
          borderRadius={"0.5rem"}
          backdropFilter={"blur(8px)"}
          width={"2rem"}
          height={"2rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => router.back()}
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
          onClick={() => router.back()}
        >
          <ShareIcon fill="white" height={"1rem"} width={"1rem"} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default QuestDetailsHeaderIconsTopBar;
