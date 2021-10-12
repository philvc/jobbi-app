import { DetailedHTMLProps } from "react";

export interface InputPasswordFieldProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	name: string;
}
