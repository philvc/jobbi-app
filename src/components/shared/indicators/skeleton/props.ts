export default interface SkeletonProps {
	children: React.ReactNode | React.ReactNode[] | string;
	height?: number | string;
	width?: number | string;
	isLoading?: boolean;
	className?: string;
}
