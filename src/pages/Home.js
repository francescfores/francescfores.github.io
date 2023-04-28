import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import {AwesomeButton} from "react-awesome-button";

const Home = () => {
	return (
		<div className="container mx-auto pt-28">
			<div className="page-control">
				<div className="ribbon ">
					<div className="animate__animated animate__backInLeft">
						<a className="" target="_blank" href="https://github.com/rcaferati"
						   title="@rcaferati">FOLLOW ON GITHUB
						</a>
					</div>
				</div>
			</div>
			<AppBanner></AppBanner>
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					aria-label="Más proyectos">
					<AwesomeButton type="secondary"
								   aria-label="Hire Me Button" >
						Más proyectos
					</AwesomeButton>
				</Link>
			</div>
		</div>
	);
};

export default Home;
