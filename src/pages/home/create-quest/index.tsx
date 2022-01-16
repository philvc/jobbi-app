import { Box, Button, Switch } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import InputField from "../../../components/shared/form/input-field";
import { PrivateQuest, PublicQuest } from "../../../constants/contant";
import { EnumReferer } from "../../../constants/enums";
import { useAddSearch } from "../../../services/searches/searches";

interface PostSearchRequestDTO {
    title: string,
    description: string,
    sector?: string,
    tags?: [string]
    type: string,
}

const CreateQuest = () => {

    // Attributes
    const router = useRouter();
    const [isPrivate, setIsPrivate] = useState<boolean>(true)

    // Queries
    const {mutateAsync: postQuest} = useAddSearch();

    // Handlers
    function handleSwitchChange(e: ChangeEvent<HTMLInputElement>){
        setIsPrivate(e.target.checked)
    }
    
    async function postQuestHandler(values:PostSearchRequestDTO ){

        // post quest
        const response = await postQuest({
            data: {
                ...values,
                type: isPrivate ? PrivateQuest : PublicQuest 
            }
        });

        if(response?.id){

            router.push(`/home?referer=${EnumReferer.SIGNUP}`)
        }


    }

    return(
        <Formik<PostSearchRequestDTO> initialValues={
            {
                title: "",
                description: "",
                tags: undefined,
                sector: "",
                type: PrivateQuest,
            }
        } onSubmit={postQuestHandler}>
            <Form>
                <Box>Create Quest</Box>
                <InputField name="title" />
                <InputField name="description" />
                <InputField name="sector" />
                <Box>Is private ?</Box>
                <Switch onChange={handleSwitchChange} defaultChecked={isPrivate} isChecked={isPrivate}  />
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </Formik>
    )
}


export default CreateQuest;