import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients.js';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<div className="page-control">
				<div className="ribbon ">
					<div className="animate__animated animate__bounceInLeft">
						<a className="" target="_blank" href="https://github.com/francescfores"
						   title="@rcaferati">FOLLOW ON GITHUB
						</a>
					</div>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<div className="py-10 mt-10  bg-primary-light dark:bg-ternary-dark shadow-sm">
					<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
						Tecnologias con las que he trabajado
					</p>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
