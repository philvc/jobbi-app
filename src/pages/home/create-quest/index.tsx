import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import InputField from "../../../components/shared/form/input-field";
import { useAddSearch } from "../../../services/search/search";
import { useGetMySearch } from "../../../services/searches/searches";

interface PostSearchRequestDTO {
    title: string,
    description: string,
    sector?: string,
    tags?: [string]
}

const CreateQuest = () => {

    // Attributes
    const router = useRouter();

    // Queries
    const {mutateAsync: postQuest} = useAddSearch();

    // Handlers
    async function postQuestHandler(values:PostSearchRequestDTO ){

        // post quest
        const response = await postQuest({
            data: {
                ...values
            }
        });

        if(response?.id){

            router.push('/home')
        }


    }

    return(
        <Formik<PostSearchRequestDTO> initialValues={
            {
                title: "",
                description: "",
                tags: undefined,
                sector: ""
            }
        } onSubmit={postQuestHandler}>
            <Form>
                <Box>Create Quest</Box>
                <InputField name="title" />
                <InputField name="description" />
                <InputField name="sector" />
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </Formik>
    )
}


export default CreateQuest;