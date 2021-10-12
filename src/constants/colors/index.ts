export interface Colors {
	TRANSPARENT: Color;
	BACKGROUND: Color;
	WHITE: Color;
	DANGER: ColorPallet;
	GREEN: ColorPallet;
	BLUE: ColorPallet;
	LIGHT_BLUE: ColorPallet;
	GREY: ColorPallet;
	BLACK: ColorPallet;
}

export interface ColorPallet {
	T100: Color;
	T200: Color;
	T300: Color;
	T400: Color;
	T500: Color;
	T600: Color;
	T700: Color;
}

export interface Color {
	hex: string;
}

export const COLORS: Colors = {
	TRANSPARENT: {
		hex: "transparent",
	},
	BACKGROUND: {
		hex: "#F0F0EE",
	},
	WHITE: {
		hex: "#FFFFFF",
	},
	DANGER: {
		T700: {
			hex: "#923B3B",
		},
		T600: {
			hex: "#C34F4F",
		},
		T500: {
			hex: "#FE4A49",
		},
		T400: {
			hex: "#F68282",
		},
		T300: {
			hex: "#F8A1A1",
		},
		T200: {
			hex: "#FBC1C1",
		},
		T100: {
			hex: "#FDE0E0",
		},
	},
	GREEN: {
		T700: {
			hex: "#1C7F47",
		},
		T600: {
			hex: "#25AA5F",
		},
		T500: {
			hex: "#2ED477",
		},
		T400: {
			hex: "#58DD92",
		},
		T300: {
			hex: "#82E5AD",
		},
		T200: {
			hex: "#ABEEC9",
		},
		T100: {
			hex: "#D5F6E4",
		},
	},
	BLUE: {
		T700: {
			hex: "#265499",
		},
		T600: {
			hex: "#3270CC",
		},
		T500: {
			hex: "#4E5283",
		},
		T400: {
			hex: "#65A3FF",
		},
		T300: {
			hex: "#8CBAFF",
		},
		T200: {
			hex: "#B2D1FF",
		},
		T100: {
			hex: "#C4D7F2",
		},
	},
	LIGHT_BLUE: {
		T700: {
			hex: "#265499",
		},
		T600: {
			hex: "#3270CC",
		},
		T500: {
			hex: "#C4D7F2",
		},
		T400: {
			hex: "#65A3FF",
		},
		T300: {
			hex: "#8CBAFF",
		},
		T200: {
			hex: "#B2D1FF",
		},
		T100: {
			hex: "#C4D7F2",
		},
	},
	GREY: {
		T700: {
			hex: "#000000",
		},
		T600: {
			hex: "#242323",
		},
		T500: {
			hex: "#000F08",
		},
		T400: {
			hex: "#575656",
		},
		T300: {
			hex: "#818080",
		},
		T200: {
			hex: "#ABABAB",
		},
		T100: {
			hex: "#D5D5D5",
		},
	},
	BLACK: {
		T700: {
			hex: "#000000",
		},
		T600: {
			hex: "#242323",
		},
		T500: {
			hex: "#000F08",
		},
		T400: {
			hex: "#575656",
		},
		T300: {
			hex: "#818080",
		},
		T200: {
			hex: "#ABABAB",
		},
		T100: {
			hex: "#D5D5D5",
		},
	},
};
