import { DetailedHTMLProps } from "react";

export interface InputFieldProps
	extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	name: string;
	disableReset?: boolean;
	height?: string;
}
