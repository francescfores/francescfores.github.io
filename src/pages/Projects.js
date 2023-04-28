import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="page-control">
				<div className="ribbon ">
					<div className="animate__animated animate__lightSpeedInLeft">
						<a className="" target="_blank" href="https://github.com/francescfores"
						   title="@rcaferati">FOLLOW ON GITHUB
						</a>
					</div>
				</div>
			</div>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
