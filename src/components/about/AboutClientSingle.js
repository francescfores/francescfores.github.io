const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="h-full w-50 md:w-50 px-4 xl:px-14 border-ternary-light dark:border-ternary-dark rounded-lg mb-8 cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
