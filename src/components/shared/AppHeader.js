import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import HireMeModal from '../HireMeModal';
import logoLight from '../../images/react_white.png';
import logoLight2 from '../../images/logo-light.svg';
import logoDark from '../../images/react_dark.png';
import logoDark2 from '../../images/logo-dark.svg';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';
import MenuButton from '../reusable/MenuButton.js';
import { AwesomeButton } from 'react-awesome-button';


const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false)
		}
	}

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}
	const [isOpen, setOpen] = useState(false);
	/*
          const canvasStyle = {
            display: "flex",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center"
          };
    */
	const menuButtonStyle = {
		marginLeft: "2rem"
	};
	return (
		<div className="">
			<motion.nav
				initial={{ opacity: 0 }}
				animate={{ opacity: 1,position: "fixed"}}
				id="nav"
				className=" z-50 xs:h-3 xs:mt-1 bg-primary-light dark:bg-ternary-dark w-full justify-center items-center "
			>
				<div className="z-10 block sm:flex sm:justify-between sm:px-6 xs:pt-0">
					{/* Header menu links and small screen hamburger menu */}

					<div className="flex justify-between items-center px-4 sm:px-0 ">
						<div className="py-2 align-text-">
							<Link to="/">
								{activeTheme === 'dark' ? (
									<img
										src={logoDark}
										className="w-8"
										alt="Dark Logo"
									/>
								) : (
									<img
										src={logoLight}
										className="w-8"
										alt="Dark Logo"
									/>
								)}

							</Link>

						</div>
						<Link
							to="/projects"
							className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
							aria-label="Projects"
						>

						</Link>
						{/* Theme switcher small screen */}
						<div
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							className="ml-auto block sm:hidden bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
						>
							{activeTheme === 'dark' ? (
								<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
							) : (
								<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
							)}
						</div>

						{/* Small screen hamburger menu */}

						<div className="sm:hidden ">
							<MenuButton
								isOpen={isOpen}
								onClick={() => { setOpen(!isOpen); toggleMenu();}}
								strokeWidth="4"
								color="#3399cc"
								transition={{ ease: "easeOut", duration: 0.2 }}
								width="34"
								height="16"
								style={menuButtonStyle}

							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</MenuButton>
						</div>
					</div>

					{/* Header links small screen */}
					<div
						className={
							showMenu
								? 'w-full bg-primary-light dark:bg-ternary-dark block m-0 sm:ml-4 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
								: 'hidden'
						}
					>
						<Link
							to="/projects"
							className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
							aria-label="Projects"
						>
							Proyectos
						</Link>
						<Link
							to="/about"
							className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
							aria-label="About Me"
						>
							Acerca de mí
						</Link>
						<Link
							to="/contact"
							className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
							aria-label="Contact"
						>
							Contacto
						</Link>
						<div className=" border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
							<AwesomeButton  onPress={() => showHireMeModal()} aria-label="Hire Me Button"
										   onClick={showHireMeModal} type="primary">Contratación</AwesomeButton>
						</div>
					</div>

					{/* Header links large screen */}

					{/* Header right section buttons */}
					<div className="hidden sm:flex justify-between items-center ">
						<div className="pr-7 font-general-medium hidden m-0 sm:ml-4  sm:mt-3 sm:flex  justify-center items-center shadow-lg sm:shadow-none">
							<Link
								to="/projects"
								className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
								aria-label="Projects"
							>
								Proyecto
							</Link>
							<Link
								to="/about"
								className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
								aria-label="About Me"
							>
								Acerca de mí
							</Link>
							<Link
								to="/contact"
								className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
								aria-label="Contact"
							>
								Contacto
							</Link>
						</div>
						<div className="hidden md:flex mt-2" >
							<AwesomeButton  onPress={() => showHireMeModal()}
											aria-label="Hire Me Button" onClick={showHireMeModal} type="primary">Contratación</AwesomeButton>
						</div>

						{/* Theme switcher large screen */}
						<div
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							className="mt-2 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
						>
							{activeTheme === 'dark' ? (
								<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
							) : (
								<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
							)}
						</div>
					</div>
				</div>
				{/* Hire me modal */}
				<div>
					{showModal ? (
						<HireMeModal
							onClose={showHireMeModal}
							onRequest={showHireMeModal}
						/>
					) : null}
					{showModal ? showHireMeModal : null}
				</div>
			</motion.nav>
		</div>
	);
};

export default AppHeader;
