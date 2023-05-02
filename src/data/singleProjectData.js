// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
import Dunes1 from '../images/projects/dunes_2.png';
import Dunes2 from '../images/projects/dunes3.png';
import Dunes3 from '../images/projects/dunes4.png';
import Easy2bwise1 from '../images/projects/easy2bwise2.png';
import Easy2bwise2 from '../images/projects/easy2bwise3.png';
import Datantec1 from '../images/projects/datantec1.png';
import Datantec2 from '../images/projects/datandtec2.png';
import DatantecApp from '../images/projects/datapp.png';
import DatantecApp2 from '../images/projects/datantecapp2.png';
import CaptioWeb from '../images/projects/captioweb.png';
import CaptioWeb2 from '../images/projects/captio_web.png';
import CaptioWeb3 from '../images/projects/captioweb3.png';
import CaptioApp from '../images/projects/captioapp10.png';
import CaptioApp2 from '../images/projects/captioapp12.png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = [
		{
			id: 1,
			ProjectHeader: {
				title: 'Dunes Restaurant',
				publishDate: 'Jul, 2021',
				tags: 'Web Application',
			},
			ProjectImages: [
				{
					id: 1,
					title: '',
					img: Dunes1,
				},
				{
					id: 2,
					title: '',
					img: Dunes2,
				},

			],
			ProjectInfo: {
				ClientHeading: 'Acerca del cliente',
				CompanyInfo: [
					{
						id: 1,
						title: 'Empresa',
						details: 'Les Dunes Restaurant',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://lesdunesrestaurant.com/',
					}

				],
				ObjectivesHeading: 'Objetivo',
				ObjectivesDetails:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
				Technologies: [
					{
						title: 'Herramientas y Tecnologías',
						techs: [
							'WordPress',
							'HTML',
							'CSS',
							'JavaScript',
							'Mysql',
							'Jquery',
						],
					},
				],
				ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
				ProjectDetails: [
					{
						id: 1,
						details:
								'Página web con gestión de reservas creada con WordPress.' +
							' Lo primero fue pensar en el diseño  los apartados de la pagina web y en el sistema de reserva. ' +
							' El objetivo principal era facilitar el proceso de las reservas tanto al cliente como al empresario ' +
							'utilizando un calendario con las fechas disponibles, las mesas, horarios etc.'
					},
					{
						id: 2,
						details:
							' Ayudando a atraer más publico con un diseño responsive,  atractivo y limpio, una web básica y funcional.\n'
					}
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: 'https://www.youtube.com/c/StomanStudio',
					},
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
			},
		},
		{
			id: 2,
			ProjectHeader: {
				title: 'Easy2bwise',
				publishDate: 'Sep, 2019',
				tags: 'Web Application',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: Easy2bwise1,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: Easy2bwise2,
				}
			],
			ProjectInfo: {
				ClientHeading: 'Acerca del cliente',
				CompanyInfo: [
					{
						id: 1,
						title: 'Empresa',
						details: 'Easy2bwise',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://easy2bwise.com/',
					}

				],
				Technologies: [
					{
						title: 'Herramientas y Tecnologías',
						techs: [
							'Laravel',
							'PHP',
							'Mysql',
							'HTML',
							'CSS',
							'JavaScript',
							'Jquery',
						],
					},
				],
				ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
				ProjectDetails: [
					{
						id: 1,
						details:
							'Aplicacion Web construida con el framework de Laravel,  ' +
							'este fue de mis primeros proyectos como freelance echos con Laravel, ' +
							'en general es una herramienta interna para gestionar los cursos impartidos por la empresa. ' +
							'Lo primero que pensamos con el cliente fue las fases que tendria el proyecto, luego el backend,' +
							' la base de datos y los roles de cada usuario' +
							'' +
							'' +
							''
					},
					{
						id: 2,
						details:
							'Basado en los principales de SOLID, utilizando el patron repositorio, inyeccion de dependencias, autentificacion de usuarios, entre otras funcionalidades. '+
							'Para facilitar el desarollo cree las migraciones y los seeders con los datos d\'ejemplo basicos para el funcionamiento.' +
							' Los principales apartados de l\'aplicacion son: usuarios, categorias, departamentos, cursos,herramientas, temas, version de tema, etc, '
					},
					{
						id: 3,
						details:
							'Donde cada rol visualizaria unos apartados concretos, el rol admin tendria todos los permisos para administrar toda la app, ' +
							'el rol gestor podria dirigir unos ciertos apartados definidos, como los cursos o los temas y ' +
							'el alumno podria visualizar y editar algunas cosas como los cursos a los que esta apuntado'
					},
					{
						id: 4,
						details:
							'El frontend esta echo con el framework de bootstrap ' +
							'y el motor PHP de plantillas integrado de Laravel, Blade.' +
							''
					}
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: 'https://www.youtube.com/c/StomanStudio',
					},
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
			},
		},
		{
			id: 3,
			ProjectHeader: {
				title: 'Datandtec',
				publishDate: '2020 - 2022',
				tags: 'Web Application',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: Datantec1,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: Datantec2,
				}
			],
			ProjectInfo: {
				ClientHeading: 'Acerca del cliente',
				CompanyInfo: [
					{
						id: 1,
						title: 'Empresa',
						details: 'Datandtec',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://datandtec.com/',
					}

				],
				Technologies: [
					{
						title: 'Herramientas y Tecnologías',
						techs: [
							'Laravel API',
							'PHP',
							'Mysql',
							'Python',
							'Tesseract',
							'Amazon Textract',
							'Angular 8',
							'Typescript',
							'HTML',
							'CSS',
							'JavaScript',
						],
					},

				],
				ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
				ProjectDetails: [
					{
						id: 1,
						details:
							'Desarrollo de un proyecto para fidelizar los clientes de los comercios locales afiliados a una federaciones o grupos de cada localidad. Los clientes escanean los tickets al hacer una compra en algún negocio, a través del OCR o manualmente, seguidamente el negocio valida el ticket y se añade la transacción al sistema, finalmente el cliente obtiene unos puntos dependiendo del total del ticket, que podrá utilizar para conseguir obsequios en todos los negocios, definidos por ellos mismos.'

					},
					{
						id: 2,
						details:
							'El proyecto está formado por una Web app como frontend utilizando el framework de Angular 8, ' +
							'el backend con una API Laravel para consumir la Base de datos, ' +
							'la parte del escaneo de tickets desarrollada con Python contiene un OCR principal con Tesseract y uno secundario Amazon Textract por si falla el principal,' +
							'y finalmente l\'aplicación móvil explicada como otro proyecto en otro apartado.'

					},
					{
						id: 3,
						details:
							'Resumiendo la plataforma tiene unos roles definidos, super admin, admin, empresario y cliente.'
					},
					{
						id: 4,
						details:
							'El rol super admin puede gestionar toda la plataforma, puede visualizar y extraer analiticas apartir de graficas, añadir federaciones, crear las categorias y subcategorias de los negocios, mapas de densidad '
					},
					{
						id: 5,
						details:
							'El admin gestiona la federacion/grupo, analiticas pudiendo filtrar entre una fecha inicia y fecha final, con gráficas como el consumo por categorías de negocio entre muchas otras más, gestionar los negocios, los premios, mapas de densidad donde se podría visualizar, los negocios, el consumo , etc. '

					},
					{
						id: 6,
						details:
							'El empresario es el encargado de validar los tickets escaneados,visualizar las transacciones, gestionar premios/usuarios, visualizar los clientes y las valoraciones de su negocio.'

					},
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: 'https://www.youtube.com/c/StomanStudio',
					},
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
			},
		},
		{
			id: 4,
			ProjectHeader: {
				title: 'Datandtec',
				publishDate: '2020 - 2022',
				tags: 'Mobile Application',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: DatantecApp,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: DatantecApp2,
				}
			],
			ProjectInfo: {
				ClientHeading: 'Acerca del cliente',
				CompanyInfo: [
					{
						id: 1,
						title: 'Empresa',
						details: 'Datandtec',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://datandtec.com/',
					}

				],
				Technologies: [
					{
						title: 'Herramientas y Tecnologías',
						techs: [
							'Ionic 5',
							'Angular 8',
							'Typescript',
							'HTML',
							'CSS',
							'JavaScript',
						],
					},

				],
				ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
				ProjectDetails: [
					{
						id: 1,
						details:
								'La apliacion mobil de Datantec sirve como ventana comercial para los negocios, ' +
								'ayudando aumentar la satisfacción y captar nuevos clientes.' +
								'Los principales apartados a destacar de la app son: negocios, escanear, premios y transacciones'+
								'Los usuarios al hacer una compra en un negocio pueden escanear un ticket atraves del OCR o manualmente ' +
								'y ver el resultado directamente o en el apartado de transaciones. ' +
								'Los clientes obtienen puntos al escanear el ticket, los cuales pueden ver en' +
								'su perfil y utilizar para canjear los por premios establecidos por los negocios en el apartado de premios'
					},
					{
						id: 5,
						details:
							'Empece con este proyecto desde 0 trabajando con un equipo de 2 programadores en presencial y en remoto. ' +
							'De mis primeros proyectos con Angular 8, aun que con Ionic ' +
							'ya havia trabajado anteriormente.' +
							'El frontend de la app esta echo con Ionic 5 Angular 8, ' +
							'consumiendo una API echa con Symfony actualizada a Laravel. '+
							'Resumen de tareas: ' +
							'Creación y maquetacion total del disenyo. '+
							'Integracion de los modelos de la API. '+
							'Correcion de errores. '+
							'Definir las rutas de toda la app entre muchas otras.'
					},
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: 'https://www.youtube.com/c/StomanStudio',
					},
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
			},
		},
		{
			id: 6,
			ProjectHeader: {
				title: 'Captio',
				publishDate: '2017 - 2018',
				tags: 'Web Application',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: CaptioWeb,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: CaptioWeb3,
				}
			],
			ProjectInfo: {
				ClientHeading: 'Acerca del cliente',
				CompanyInfo: [
					{
						id: 1,
						title: 'Empresa',
						details: 'Captio',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://www.captio.net/',
					}

				],
				Technologies: [
					{
						title: 'Herramientas y Tecnologías',
						techs: [
							'Ionic 5',
							'Angular 8',
							'Typescript',
							'HTML',
							'CSS',
							'JavaScript',
						],
					},

				],
				ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
				ProjectDetails: [
					{
						id: 1,
						details:
							'La plataforma web de Captio es una herramienta en línea que se utiliza para controlar y automatizar ' +
							'los gastos de una empresa. Con ella los administradores pueden tener una visión completa de todos los ' +
							'gastos de la empresa, pueden aprobar o rechazar las entradas de gastos registradas por los empleados y ' +
							'también pueden configurar reglas de gastos y límites de presupuesto para cada uno de los departamentos o empleados.'
					},
					{
						id: 2,
						details:
							'Trabando con un equipo de 10 o más desarrolladores, escribiendo código tanto' +
							' en backend como en frontend como programador junior,' +
							'Especialmente en .Net, C#, Javascript, HTML, CSS.'+
							'Mis principales tareas en la apliación web eran desarollo de funcionalidades y coreccion de bugs.'

					},
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: 'https://www.youtube.com/c/StomanStudio',
					},
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
			},
		},
		{
			id: 7,
			ProjectHeader: {
				title: 'Captio',
				publishDate: '2017 - 2018',
				tags: 'Mobile Application',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: CaptioApp,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: CaptioApp2,
				}
			],
			ProjectInfo: {
				ClientHeading: 'Acerca del cliente',
				CompanyInfo: [
					{
						id: 1,
						title: 'Empresa',
						details: 'Captio',
					},
					{
						id: 3,
						title: 'App',
						details: 'https://play.google.com/store/apps/details?id=captio.ongest.com&hl=es&gl=US',
					}

				],
				Technologies: [
					{
						title: 'Herramientas y Tecnologías',
						techs: [
							'.Net',
							'C#',
							'Xamarin Classic',
							'Xamarin Forms',
							'Android',
							'IOS',
							'Javascript',
							'HTML',
							'CSS',
						],
					},

				],
				ProjectDetailsHeading: 'Desafío y descripcion del proyecto',
				ProjectDetails: [
					{
						id: 1,
						details:
							'Captio aplicación móvil, permite a los usuarios capturar' +
							' gastos de negocios de forma fácil y rápida. Los usuarios pueden tomar ' +
							'fotos de recibos y registrar detalles como el monto del gasto, ' +
							'la fecha y la categoría. La aplicación también permite a los usuarios asociar ' +
							'gastos con proyectos específicos y generar informes de gastos para su uso interno o ' +
							'para compartir con clientes'
					},
					{
						id: 2,
						details:
							'Trabando como programador junior,en un equipo de 5 desarrolladores, utilizando el gestor de tareas Wrike y metodologias agiles como Scrum.' +
							'El proyecto Mobile esta compuesto por una API y l\'aplicacion multiplatafroma.'

					},
					{
						id: 2,
						details:
							'Utilizando C#,Xamarin Classic,Xamarin Forms, Android, IOS.\n' +
							'Desarrollando en la parte frontend y backend, mis funciones entre otras eran ' +
							'crear nuevas funcionalidades, maquetacion de los diseños para l\'apliacion, ' +
							', correcion de bugs y hacer pruebas con el ocr.'+
							'\n'
					}

				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: 'https://www.youtube.com/c/StomanStudio',
					},
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
			},
		},
];

