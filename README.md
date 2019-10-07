# Proyecto Platzi Video
> Basado en el [curso practico de react](https://platzi.com/clases/react-ejs/)  
**Se crea el proyecto desde cero**
___

## Tecnología utilizada en el curso:
1. webpack
2. babel
3. eslint
4. sass
5. react
___

## Dependencias Utilizadas
* Babel
> npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
* Webpack
> npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev
* Webpack Dev Server
> npm install --save-dev webpack-dev-server
* SASS
> npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader
* ESLint
> npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
* File Loader
> npm install --save-dev file-loader
* JSON Server
>  sudo npm install json-server -g  
>> #### Ejecución (en modo administrador)
>> json-server archivoParaTuAPI.json

### Routes 

Una vez tienes listo el repositorio vas a crear una nueva rama para trabajar en ella a lo largo del curso:

> git checkout -b feature/router-redux  

Ya que nos encontramos dentro de la rama vamos a instalar React Router, la librería que nos va a permitir manejar rutas dentro de nuestra aplicación:

> npm install react-router-dom --save