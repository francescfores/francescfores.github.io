import {FiGithub, FiTwitter, FiInstagram, FiBook, FiMail, FiLinkedin} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';
import 'react-awesome-button/dist/styles.css';
import '../../css/AwesomeButtonStyles.css';
import { AwesomeButtonSocial } from "react-awesome-button";

const socialLinks = [
	{
		id: 1,
		icon: <FiMail />,
		url: 'https://mail.google.com/mail/u/0/?fs=1&to=ffores93@gmail.com&su=&body=&tf=cm',
	},
	{
		id: 2,
		icon: <FiTwitter />,
		url: 'https://twitter.com/francesc_fores',
	},
	{
		id: 3,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/francesc-for%C3%A9s-campos-3494a2147/',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark py-2 px-4">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Sígueme
					</p>
					<ul className="flex gap-4 sm:gap-8 mt-4">
						<AwesomeButtonSocial type="mail" sharer={{url: 'ffores93@gmail.com'}}> </AwesomeButtonSocial>
						<AwesomeButtonSocial type="linkedin" href="https://www.linkedin.com/in/francesc-for%C3%A9s-campos-3494a2147"> </AwesomeButtonSocial>
						<AwesomeButtonSocial type="github" href="https://github.com/francescfores"> </AwesomeButtonSocial>
						{/*
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
						*/}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
