import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const squareVariants = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
	hidden: { opacity: 0.5, scale: 0.5 }
};

const ProjectSingle = ({ title, category, image, id }) => {
	console.log(id)
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={squareVariants}
			className="square"
		>
			{/*<motion.div*/}
			{/*	ref={ref}*/}
			{/*	animate={controls}*/}
			{/*	initial="hidden"*/}
			{/*	variants={squareVariants}*/}
			{/*	className="square"*/}
			{/*	style={{width: "100px", height:"100px", background:"green", margin:"100px"*/}
			{/*	}}*/}
			{/*></motion.div>*/}
			<Link to="/projects/single-project" state={{ id: id }} aria-label="Single Project">
				<div className="overflow-hidden mx-auto  mt-4 sm:w-full md:w-4/6
				 mt-10 rounded-xl shadow-lg hover:shadow-xl cursor-pointer
				mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark ">
					<div class="overflow-hidden">
						<img style={{width: "100%"}}
							src={image}
							className=" rounded-t-xl border-none hover:scale-110 hover:rotate-1 overflow-hidden transition-all duration-300"
							alt="Single Project "
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
