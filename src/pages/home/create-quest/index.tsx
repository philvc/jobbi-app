import { Box, Button, Switch, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import InputField from "../../../components/shared/form/input-field";
import Page from "../../../components/shared/layout/page";
import { PrivateQuest, PublicQuest } from "../../../constants/contant";
import { EnumReferer } from "../../../constants/enums";
import { useAddSearch } from "../../../services/searches/searches";

interface PostSearchRequestDTO {
  title: string;
  description: string;
  sector?: string;
  tags?: [string];
  type: string;
}

const CreateQuest = () => {
  // Attributes
  const router = useRouter();
  const [isPrivate, setIsPrivate] = useState<boolean>(true);

  // Queries
  const { mutateAsync: postQuest } = useAddSearch();

  // Handlers
  function handleSwitchChange(e: ChangeEvent<HTMLInputElement>) {
    setIsPrivate(e.target.checked);
  }

  async function postQuestHandler(values: PostSearchRequestDTO) {
    // post quest
    const response = await postQuest({
      data: {
        ...values,
        type: isPrivate ? PrivateQuest : PublicQuest,
      },
    });

    if (response?.id) {
      router.push(`/home?referer=${EnumReferer.SIGNUP}`);
    }
  }

  return (
    <Formik<PostSearchRequestDTO>
      initialValues={{
        title: "",
        description: "",
        tags: undefined,
        sector: "",
        type: PrivateQuest,
      }}
      onSubmit={postQuestHandler}
    >
      <Form>
        <Page>
          <Text mt={"4rem"} mx={"1.5rem"} fontSize={"24px"} fontWeight={"700"}>
            Create Quest
          </Text>
          <Text
            color={"#8F95B2"}
            fontSize={"16px"}
            fontWeight={"400"}
            mt={".5rem"}
            mx={"1.5rem"}
            mb={"2.1875rem"}
          >
            Random text
          </Text>
          <Box mx={"1.5rem"}>
            <InputField
              placeholder="title"
              style={{ marginBottom: "16px" }}
              name="title"
            />
            <InputField
              placeholder="description"
              style={{ marginBottom: "16px" }}
              name="description"
            />
            <InputField
              placeholder="secteur"
              style={{ marginBottom: "16px" }}
              name="sector"
            />
            <Box mb={".25rem"}>Is private ?</Box>
            <Switch
              onChange={handleSwitchChange}
              defaultChecked={isPrivate}
              isChecked={isPrivate}
            />
          </Box>
          <Button
            mt={"1.5rem"}
            bg={"#6772E5"}
            color="white"
            mx={"1.5rem"}
            type="submit"
            borderRadius={".75rem"}
          >
            Submit
          </Button>
        </Page>
      </Form>
    </Formik>
  );
};

export default CreateQuest;
