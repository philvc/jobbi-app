/**
 * @param {string | number} x The number to format
 **/
export function formatNumberWithCommas(
	x: string | number,
	options: {
		suffix?: string;
		stripDecimals?: boolean;
	} = {}
): string {
	const decimals = options.stripDecimals ? 0 : 2;

	try {
		const formatter = Intl.NumberFormat("fr-BE", {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals,
		});

		return `${formatter.format(Number(x))}${options.suffix || ""}`;
	} catch {
		return x.toString();
	}
}

/**
 * @param {string | number} amount to format in EUR
 */
export function formatCurrency(amount?: string | number): string {
	if (!amount) {
		return "0";
	}
	return `${formatNumberWithCommas(amount)}€`;
}

/**
 * @param {string | number} amount to format in EUR
 */
export function formatDistance(amount?: string | number): string {
	if (!amount) {
		return "0";
	}
	return `${formatNumberWithCommas(amount)}km`;
}
