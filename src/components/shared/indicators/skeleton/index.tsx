import { Container } from "@chakra-ui/layout";
import { Fragment } from "react";
import ImportedSkeleton from "react-loading-skeleton";
import SkeletonProps from "./props";

const Skeleton = ({ children, isLoading, height, width = "100%", className }: SkeletonProps) => {
	if (isLoading) {
		return (
			<Container className={className}>
				<ImportedSkeleton height={height} width={width} />
			</Container>
		);
	}
	return <>{children ?? <Fragment />}</>;
};

export default Skeleton;
