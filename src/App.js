import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectSingle from './pages/ProjectSingle';
import { AnimatePresence } from 'framer-motion';
import UseScrollToTop from './hooks/useScrollToTop';
import 'react-awesome-button/dist/styles.css';
import '../src/css/AwesomeButtonStyles.css';
import 'animate.css';

function App() {
	return (
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">

				<Router>
					<ScrollToTop />
					<AppHeader />

					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/projects" element={<Projects/>} />
						<Route
							path="/projects/single-project"
							element={<ProjectSingle/>}
						/>

						<Route path="/about" element={<About/>} />
						<Route path="/contact" element={<Contact/>} />
					</Routes>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
	);
}

export default App;
