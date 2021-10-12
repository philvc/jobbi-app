import { DetailedHTMLProps } from "react";

export interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant?: "primary" | "danger" | "outline";
	text: string;
	className?: string;
	onClick?: () => void;
}
