import { useCountUp } from 'react-countup';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 20, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 7, duration: 2 });

	return (
		<div className="h-10 mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<p className="pt-12 font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				Tecnologias con las que he trabajado
			</p>
		</div>
	);
};

export default AboutCounter;
