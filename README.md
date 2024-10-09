# SMAR MOVIES

SMAR MOVIES es una aplicación web para buscar y ver información sobre películas. Esta aplicación está construida con React y utiliza varias bibliotecas y herramientas para mejorar la experiencia del usuario.

## Estructura del Proyecto

- `.env`
- `.gitignore`
- `package.json`
- `public/`
  - `index.html`
  - `manifest.json`
  - `robots.txt`
- `README.md`
- `src/`
  - `App.css`
  - `App.js`
  - `App.test.js`
  - `components/`
    - `Buscador.jsx`
    - `css/`
      - `buscar.css`
      - `modal.css`
      - `Tarjetas.css`
    - `Head.jsx`
    - `Tarjetas.jsx`
  - `config.json`
  - `index.css`
  - `index.js`
  - `reportWebVitals.js`
  - `setupTests.js`

## Descripción de Archivos y Directorios

- **public/**: Contiene archivos públicos como `index.html`, `manifest.json` y `robots.txt`.
- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Contiene los componentes React utilizados en la aplicación.
    - **Buscador.jsx**: Componente para buscar películas.
    - **Head.jsx**: Componente para mostrar el encabezado de la aplicación.
    - **Tarjetas.jsx**: Componente para mostrar tarjetas de películas.
  - **css/**: Contiene archivos CSS específicos para los componentes.
    - **buscar.css**: Estilos para el componente Buscador.
    - **modal.css**: Estilos para los modales.
    - **Tarjetas.css**: Estilos para las tarjetas de películas.
  - **App.js**: Componente principal de la aplicación.
  - **App.css**: Estilos globales de la aplicación.
  - **index.js**: Punto de entrada de la aplicación.
  - **index.css**: Estilos globales adicionales.
  - **config.json**: Archivo de configuración.
  - **reportWebVitals.js**: Archivo para reportar métricas de rendimiento.
  - **setupTests.js**: Configuración para pruebas.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/tu-repositorio.git`
2. Navega al directorio del proyecto: `cd tu-repositorio`
3. Instala las dependencias: `npm install`

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- **`npm start`**: Inicia la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.
- **`npm test`**: Inicia el corredor de pruebas en modo interactivo de vigilancia. Consulta la sección sobre running tests para más información.
- **`npm run build`**: Construye la aplicación para producción en la carpeta `build`. Empaqueta correctamente React en modo de producción y optimiza la construcción para el mejor rendimiento.
- **`npm run eject`**: Nota: esta es una operación unidireccional. Una vez que `eject` se haya ejecutado, ¡no puedes volver atrás!
  - Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes `eject` en cualquier momento. Este comando eliminará la dependencia de construcción única de tu proyecto.

## Dependencias

- `@ant-design/icons`: Iconos de Ant Design.
- `@testing-library/jest-dom`: Extensiones de jest para pruebas DOM.
- `@testing-library/react`: Utilidades para probar componentes React.
- `@testing-library/user-event`: Simulación de eventos de usuario.
- `antd`: Biblioteca de componentes de Ant Design.
- `axios`: Cliente HTTP para realizar solicitudes.
- `react`: Biblioteca principal de React.
- `react-dom`: Biblioteca para manipular el DOM con React.
- `react-scripts`: Scripts y configuración para Create React App.
- `react-youtube`: Componente de React para incrustar videos de YouTube.
- `web-vitals`: Biblioteca para medir métricas de rendimiento web.

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.