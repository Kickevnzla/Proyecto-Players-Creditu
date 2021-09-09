# Proyecto-Players-Creditu
<p align="center"><img src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" width="100px" heigth="100px"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" width="100px" heigth="100px"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png" width="100px" heigth="100px"><img src="https://brandslogos.com/wp-content/uploads/thumbs/nodejs-icon-logo.png" width="100px" heigth="100px"></p>

![imagen](https://user-images.githubusercontent.com/68813378/132619521-b19bbf3c-d3b7-4592-b9ea-17aef33369a0.png)

Este es un proyecto creado para Creditu el cual permite conectarse a una base de datos, proporcionada por la empresa, la cual contiene diferentes jugadores con sus distintos atributos, estos se desplegan en la aplicacion y esta a su vez permite filtrar los jugadores por 'id', 'nickname' o 'status'.

## Construido con
* Mongodb
* Expressjs
* Vuejs
* Nodejs

## Empezamos
### Prerequisitos
Sistema de gestion de paquetes
* npm
```
npm install npm@lastest -g
```
### Instalacion
1. Clone el repositorio
```
git clone https://github.com/kickevnzla/Proyecto-Players-Creditu.git
```
2. Instale los paquetes npm
```
npm install
```
3. Ingrese la direccion de la API en `./src/index.js`
```
const link = mongoose.connect('API LINK')
```
4. Para iniciar la aplicacion
```
npm run dev
```
Esta se abrira automaticamente en el navegador en http://localhost:3000

## Mockup
![imagen](https://user-images.githubusercontent.com/68813378/132622306-d24f231b-da70-4937-aabc-d14168118bc5.png)
