import { DropEvent, FileRejection } from "react-dropzone";
export interface DropzoneProps {
	onDropFiles: (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => void;
	type?: "audio" | "picture" | "file";
}
