import { DropzoneProps } from "./props";
import { useDropzone } from "react-dropzone";
import { COLORS } from "../../../../constants/colors";
import { Box, Container, Flex } from "@chakra-ui/layout";
import Folder from "../../icons/folder";
import Paragraph from "../../typography/paragraph";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/typography";

const Dropzone = ({ onDropFiles, type }: DropzoneProps) => {
	//Attributes
	const onDrop = onDropFiles;
	const fileExtension = type === "audio" ? "MP3" : type === "picture" ? "PNG or JPEG" : "";

	const { getInputProps, getRootProps } = useDropzone({ onDrop });

	return (
		<Box background={COLORS.BACKGROUND.hex} rounded={10} borderWidth={4} p={6} borderStyle="dashed" borderColor={COLORS.GREY.T200.hex} w={"275px"} {...getRootProps()}>
			<Box mt={0}>
				<input {...getInputProps()} />
			</Box>
			<Flex direction="column" align="center" justify="center">
				<Folder width="47px" height="39px" fill={COLORS.BLUE.T200.hex} />
				<Flex mt={4} wordBreak="break-word" flexWrap={"wrap"} justify="center">
					<Paragraph color={COLORS.BLACK.T200} size={FONT_SIZES.EXTRA_SMALL}>
						{`Drag and Drop or`}
					</Paragraph>
					<Box mx={1}>
						<Paragraph weight={FONT_WEIGHT.SEMI_BOLD} color={COLORS.BLUE.T500} size={FONT_SIZES.EXTRA_SMALL}>
							Browse
						</Paragraph>
					</Box>
					<Box mt={1}>
						<Paragraph color={COLORS.BLACK.T200} size={FONT_SIZES.EXTRA_SMALL}>
							{`to upload (max 20MB)`}
						</Paragraph>
					</Box>
				</Flex>
				{fileExtension && (
					<Box mt={2}>
						<Paragraph weight={FONT_WEIGHT.THIN} size={FONT_SIZES.TINY} color={COLORS.DANGER.T500}>
							{`File should be ${fileExtension}`}
						</Paragraph>
					</Box>
				)}
			</Flex>
		</Box>
	);
};

export default Dropzone;
