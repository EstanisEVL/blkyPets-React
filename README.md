<img src='images/LogoBLKYpng.png'>

## Alumno:  
[Estanislao Elías Varela Lucius](https://github.com/EstanisEVL/)

# BLKY Pets - Proyecto para el curso de React JS de la carrera de Desarrollo Frontend React de CoderHouse
**Versión 1.0**

Breve introducción del proyecto:
Mi proyecto final, BLKY Pets, es un sitio web diseñado para la venta de accesorios para mascotas en formato e-commerce.

Qué ideas/enfoque se eligió para el proyecto:

![Landing page](image.jpg)
![Catálogo](image.jpg)
![Proceso de compra](image.jpg)

---

## Demo

Para probar mi sitio ingresá al siguiente [link](...).

---

## Proceso de desarrollo:
A partir del *Workbook* y la *Hoja de ruta* fui desarrollando el proyecto de la siguiente manera:

1. **Estructuración base del proyecto**: creé el proyecto en React desde la terminal de VSC utilizando el comando `npx create-react-app`. Luego limpié las carpetas creadas por defecto, removiendo los archivos innecesarios. Finalmente creé el componente *NavBar* en la carpeta *components*, cuya funcionalidad es la de renderizar la barra de navegación que incluye el logo del e-commerce y un listado de categorías clickeables.
Además creé el componente *CartWidget* cuya función es la de renderizar el ícono del carrito, y lo ubiqué dentro del componente *NavBar* para que esté visible en todo momento.
Finalmente creé el componente contenedor *ItemListContainer*, el cual recibe una prop greeting y muestra el mensaje dentro del contenedor.
2. **Contador con botón**:
3. **Catálogo con map y promises**:
4. **Detalle del producto**:
5. **Sincronizar Counter**:
6. **Cart Context**:
7. **Cart View**:
8. **Item Collection**:

---

## Herramientas y dependencias utilizadas:

<img src='src/assets/img/html.png'> <img src='src/assets/img/css.png'> <img src='src/assets/img/javascript.png'> <img src='src/assets/img/react.png'> <img src='src/assets/img/git.png'> <img src='src/assets/img/bootstrap.png'> <img src='src/assets/img/sass.png'> <img src='src/assets/img/npm.png'>

`sass v1.54.9` - [react sass](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)
Instalé la dependencia SASS para preprocesar CSS con el fin de mantener organizados todos los estilos de los distintos componentes en sus respectivos archivos y carpetas dentro de la carpeta *styles*.
`react-spinners v.0.13.6` - [react-spinners npm](https://www.npmjs.com/package/react-spinners)
Para agregar un elemento visual que le indique al usuario que el sitio está cargando ciertos elementos, instalé la dependencia react-spinners, la cual provee una colección de spinners de carga con React.js.
`sweetalert2 v.11.6.2` - [sweetalert2](https://github.com/sweetalert2/sweetalert2-react-content)
Con el fin de mejorar la experiencia de usuario estilizando las alertas instalé la dependencia SweetAlert2.
`luxon v.3.0.4` - [luxon](https://moment.github.io/luxon/#/?id=luxon)
Instalé la dependencia Luxon para darle formato a la fecha que se le asigna a cada orden que el usuario genera cuando realiza un pedido a través de la aplicación.

---

### CoderHouse
Proyecto desarrollado en base a los conocimientos adquiridos en [CoderHouse](https://www.coderhouse.com/).