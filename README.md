# Portfolio con React & TailwindCSS
<!--- error in file 
/home/fran/Documentos/Code/portfolio/react-tailwindcss-portfolio-main2/node_modules/react-awesome-button/dist/styles.css 
replace calc(var(--button-raise-level) * -1) to  calc(-1 *var(--button-raise-level)
or replace content file to styleAwaseonButton.css bugfixed
--->

¡Hola! Soy Francesc Fores, y este es mi portfolio en línea. Aquí puedes encontrar una selección de mis proyectos de programación, habilidades y experiencia laboral.
## Demo URL
[https://francescfores.github.io/](https://francescfores.github.io/)


![React-TailwindCSS-Portfolio](./src/images/mockup_2.png)

¡Gracias por visitar mi portfolio!


## Características

- [React 18] (https://react.dev/blog/2022/03/29/react-v18)
- [Tailwind CSS v3] (https://tailwindcss.com)
- Diseño simple y responsivo
- Modo oscuro
- API de contexto para la gestión del estado
- Ganchos personalizados
- Transiciones y animaciones de Framer Motion
- Componentes reutilizables
- Filtro de proyectos por categoría
- Proyectos filtrados por búsqueda
- Desplazamiento suave
- Botón paa volver a la parte superior
- Botón Descargar archivo

## Commandos

##### Abrir la carpeta del proyecto:
    $ cd react-tailwindcss-portfolio

##### Instalar paquetes y dependencias:
    $ yarn

##### Inicie un servidor de desarrollo local en `http://localhost:3000`:
    $ yarn start

##### Compilar tailwind
    $ npm run build:css o postcss src/css/tailwind.css -o src/css/main.css

## Publicar en gh-pages
    $ npm run build o $ yarn run react-scripts build
    $ npm run deploy o $ gh-pages -d build
