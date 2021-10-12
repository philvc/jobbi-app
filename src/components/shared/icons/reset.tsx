const Reset = ({ ...props }) => {
	return (
		<svg {...props} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<g opacity="0.5">
				<circle cx="8" cy="8" r="8" fill="#8F95B2" />
				<path fillRule="evenodd" clipRule="evenodd" d="M10.5 5.5L5.5 10.5M5.5 5.5L10.5 10.5" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
			</g>
		</svg>
	);
};
export default Reset;
