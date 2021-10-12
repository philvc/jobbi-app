import { COLORS } from "../../../../constants/colors";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/typography";

export const customStyles: any = {
	option: (provided: any, state: any) => ({
		...provided,
		color: state.isSelected ? COLORS.BLACK.T500.hex : COLORS.GREY.T500.hex,
		backgroundColor: "white",
		height: "48px",
		cursor: "pointer",
		"&:active": {
			backgroundColor: "white",
		},
	}),
	control: (provided: any, state: any) => ({
		...provided,
		minHeight: "48px",
		borderTopLeftRadius: "10px",
		borderTopRightRadius: "10px",
		borderBottomLeftRadius: !state.menuIsOpen ? "10px" : "initial",
		borderBottomRightRadius: !state.menuIsOpen ? "10px" : "initial",
		boxShadow: "none",
		borderLeft: `1px solid ${COLORS.GREY.T100.hex}`,
		borderTop: `1px solid ${COLORS.GREY.T100.hex}`,
		borderRight: `1px solid ${COLORS.GREY.T100.hex}`,
		borderBottom: !state.menuIsOpen ? `1px solid ${COLORS.GREY.T100.hex}` : "1px solid white",
		"&:hover": {},
	}),
	multiValue: (provided: any, state: any) => ({
		...provided,
		borderRadius: "20px",
		backgroundColor: COLORS.GREY.T100.hex,
		padding: "0 2px",
	}),
	multiValueLabel: (provided: any, state: any) => ({
		...provided,
		textSize: "14px",
	}),
	multiValueRemove: (provided: any, state: any) => ({
		...provided,
		"&:hover": {
			backgroundColor: "transparent",
		},
	}),
	menu: (provided: any, state: any) => ({
		backgroundColor: "white",
		marginTop: "none",
		borderBottomLeftRadius: "10px",
		borderBottomRightRadius: "10px",
		borderLeft: `1px solid ${COLORS.GREY.T100.hex}`,
		borderBottom: `1px solid ${COLORS.GREY.T100.hex}`,
		borderRight: `1px solid ${COLORS.GREY.T100.hex}`,
		position: "absolute",
		width: "100%",
	}),
	placeholder: (provided: any, state: any) => ({
		...provided,
		color: COLORS.GREY.T500.hex,
		fontSize: FONT_SIZES.SMALL,
		fontWeight: FONT_WEIGHT.REGULAR,
	}),
};
