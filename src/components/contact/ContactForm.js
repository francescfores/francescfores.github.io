import Button from '../reusable/Button';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../../css/AwesomeButtonStyles.css';
import {FiArrowDownCircle} from "react-icons/fi";
import emailjs from "emailjs-com";
const ContactForm = () => {

	function sendEmail(e) {
		e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

		emailjs.sendForm('service_qpmlnoi', 'template_abjg5wh', e.target, '_YANOLXtQnuK89YXX')
			.then((result) => {
				window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
			}, (error) => {
				console.log(error.text);
			});
	}

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Formulario de contacto
					</p>
					<div className="font-general-regular">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="name"
						>
							Nombre
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="name"
							name="name"
							type="text"
							required
							placeholder="Nombre"
							aria-label="Nombre"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="email"
							name="to_name"
							type="text"
							required
							placeholder="Email"
							aria-label="Email"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="subject"
						>
							Asunto
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="subject"
							name="subject"
							type="text"
							required
							placeholder="Asunto"
							aria-label="Asunto"
						/>
					</div>

					<div className="mt-6 mb-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Mensaje
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>


					<AwesomeButton type="primary submit"
								   aria-label="Hire Me Button" className="mt-10">
						Enviar
					</AwesomeButton>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
