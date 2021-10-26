import { Heading } from "./components/heading";
import { Text } from "./components/text";
import {Button} from "./components/button";
import { typo } from "./typo";
import {fonts} from './fonts';
import {mergeWith} from 'lodash';
import { extendTheme } from "@chakra-ui/react"; 

export const overrides = {
    typo,
    fonts,
    components: {
        Heading,
        Text,
        Button
    }
}

const overridedTheme = mergeWith({}, overrides)

export const UITheme = extendTheme(overridedTheme);