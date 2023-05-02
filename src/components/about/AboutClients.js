import {useContext, useEffect} from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';
import {useInView} from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const squareVariants = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
	hidden: { opacity: 0.5, scale: 0.2 }
};

const AboutClients = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const { clientsData, clientsHeading } = useContext(AboutMeContext);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={squareVariants}
		className=" square mt-10 sm:mt-20">
			{/*	<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>*/}
			<div className="grid grid-cols-5 sm:grid-cols-5 mt-10 sm:mt-14 sm:gap-10 md:gap-10">
				{clientsData.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default AboutClients;
