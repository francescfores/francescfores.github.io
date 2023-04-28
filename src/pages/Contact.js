import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import { Parallax } from 'react-parallax';

const Contact = () => {
	return (
		<div>
			<div className="page-control">
				<div className="ribbon ">
					<div className="animate__animated animate__rotateInDownLeft">
						<a className="" target="_blank" href="https://github.com/francescfores"
						   title="@rcaferati">FOLLOW ON GITHUB
						</a>
					</div>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row pt-28"
			>
				<ContactForm />
				<ContactDetails />
			</motion.div>
		</div>

	);
};

export default Contact;
