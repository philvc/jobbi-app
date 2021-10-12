import { Container } from "@chakra-ui/layout";
import React, { useMemo } from "react";
import { COLORS } from "../../../../constants/colors";
import ProgressProps from "./props";

const Progress = ({ now }: ProgressProps) => {
	// Attributes
	const memoizedNow = useMemo(() => {
		if (now > 100) {
			return 100;
		}
		return now;
	}, [now]);

	return (
		<Container className="rounded-xl overflow-hidden" background={COLORS.GREY.T100.hex} style={{ height: 20, width: "100%" }}>
			<Container background={COLORS.BLUE.T500.hex} style={{ height: 20, width: `${memoizedNow}%` }} />
		</Container>
	);
};

export default Progress;
