import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects//ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import {useLocation} from "react-router-dom";


const ProjectSingle = () => {
	const location = useLocation()
	const id  = location.state.id

	console.log(id)
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto"
		>
			<SingleProjectProvider id={id} >
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
