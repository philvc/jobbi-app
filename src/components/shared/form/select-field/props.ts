import React, { DetailedHTMLProps } from "react";

export interface SelectFieldProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	name: string;
	placeholder: string;
	isMulti?: boolean;
	list?: any;
	icon?: JSX.Element;
}
