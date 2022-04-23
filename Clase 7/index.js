/* let num = 10;
num = num + 1;
num += 1;
num++; */

let temperatura = 23;

/* if(temperatura > 21){
  console.log("hace calor");
}else{
  console.log("no hace mucho calor");
}
 */
// operador ternario   condicion ? caso1 : caso2
//temperatura > 21 ? console.log("hace calor") : console.log("no hace mucho calor");

/* const usuario = {
  nombre: "Octavio",
  edad: 18
};

const permiso = usuario.edad >= 18 ? true : false;

permiso ? console.log("puedes entrar") : console.log("no puedes entrar"); */

/* const carrito = [1]

if (carrito.length === 0) {
  console.log("El carrito está vacío!")
}

carrito.length === 0 && console.log("el carrito está vacio")

console.log(carrito.length === 0 && console.log("el carrito está vacio")); */

/* 
&&
true && false => false sale el segundo
false && true => false sale el primero

*/

/* const usuario = {
  nombre: "John Doe",
  edad: 20
}

const registroIngreso = usuario.edad >= 18 && new Date();

console.log(registroIngreso) */

/* 
  condicio1 || condicion2

  si condicion1 es diferente de 0, null, NaN, false o string vacio entonces retorna condicion1
*/

/* console.log( 0 || "valor")  // valor
console.log( 40 || "valor")  // 40
console.log( null || "valor")  // valor
console.log( undefined || "valor")  // valor
console.log( "Hola Mundo" || "valor")  // Hola Mundo
console.log( "" || "valor")  // valor
console.log( NaN || "valor")  // valor
console.log( true || "valor")  // true
console.log( false || "valor")  // valor */

/* const usuario1 = {
  nombre: "John Doe",
  edad: 14
}
const usuario2 = null;

console.log( usuario1 || "El usuario no existe" );
console.log( usuario2 || "El usuario no existe" ); */

/* let carrito;

let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )

if (carritoLocalStorage) {
  carrito = carritoLocalStorage;
} else {
  carrito = [];
}

console.log(carrito); */

/* const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(carrito); */

/* console.log( 0 ?? "valor")  // 0
console.log( 40 ?? "valor")  // 40
console.log( null ?? "valor")  // valor
console.log( undefined ?? "valor")  // valor
console.log( "Hola Mundo" ?? "valor")  // Hola Mundo
console.log( "" ?? "valor")  // ""
console.log( NaN ?? "valor")  // NaN
console.log( true ?? "valor")  // true
console.log( false ?? "valor")  // false */

/* const carrito = null;

console.log(carrito?.productos || "los productos no existen"); */

/* const usuario = {
  nombre: "John Doe",
  edad: 22,
  cursos: {
    javascript: "aprobado",
  }
};

console.log( usuario?.cursos?.javascript || "La propiedad no existe")
// "aprobado"
console.log( usuario?.trabajos?.coderhouse || "La propiedad no existe") */
// "La propiedad no existe"

/* false ? (true ? console.log("hola") : console.log("chao")) : console.log("no podemos entrar"); */

/* const perrito = {
  nombre: "firulai",
  edad: 3
} */

/* let nombre = perrito.nombre;
let edad = perrito.edad;

console.log(nombre);
console.log(edad); */

/* let { nombre, edad } = {nombre: "firulai", edad: 3};
console.log(nombre);
console.log(edad); */
/* const usuario = {
  nombre: "John Doe",
  edad: 32
}

const { nombre, edad } = usuario

console.log(nombre) // "John Doe"
console.log(edad) // 32 */

/* const usuario = {
  nombre: "John Doe",
  edad: 32,
  telefono: {
      cel: 113334444,
      casa: null,
      trabajo: 113325555
  }
}

const {nombre, edad, telefono: {trabajo}} = usuario;

console.log(nombre);
console.log(edad);
console.log(trabajo); */

/* const item = {
  item_id: 432,
  product_name: "Some product",
  price_per_unit: 5600
}

const {
  item_id: identificador,
  product_name: nombre,
  price_per_unit: precio
} = item;

console.log(identificador, nombre, precio); */

/* const producto = {
  id: 10,
  nombre: "Curso Javascript",
  precio: 12500
}

const desestructurar = (item) => {
  // desestructurando dentro del bloque
  const {id, nombre} = item
  console.log(id, nombre)
}

desestructurar(producto); */

/* const producto = {
  id: 10,
  nombre: "Curso Javascript",
  precio: 12500
}

const desestructurar = ({id, nombre}) => {
  // desestructurando dentro del bloque
  console.log(id, nombre);
}

desestructurar(producto); */

/* window.addEventListener('click', ( {x, y} ) => {
  console.log(x, y)
}) */

/* const nombres = ["Agostina", "Octvio", "Luis"];
const [nombre1, nombre2, nombre3] = ["Agostina", "ocatvio", "Luis"];

console.log(nombre1, nombre2, nombre3); */

/* const nombres = ["Agostina", "Octvio", "Luis"];
const [, , nombre3] = ["Agostina", "ocatvio", "Luis"];

console.log(nombre3); */

// el spread operator une los elementos del arreglo
/* const nombres = ["Agostina", "Octvio", "Luis"];
console.log(nombres.join(" "));
console.log(...nombres); */

/* //sacamos con los tres punticos los elementos del arreglo
const numeros = [1,2,3,4,5,3,4,99];
//console.log(Math.max(1,2,3,4,5,3,4,99));
console.log(Math.max(...numeros)); */

/* const nombres1 = ["Juan", "Julieta"];
const nombres2 = ["Carlos", "Mariela"];

let nombres = [...nombres1, ...nombres2]
console.log(nombres);

console.log({...nombres}); */

/* const usuario1 = {
  nombre: "Juan",
  edad: 24,
  curso: "Javascript"
};

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario2 = {
  ...usuario1
};

console.log(usuario2); // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

const usuario3 = {
  ...usuario1,
  curso: "ReactJS",
  email: "juan@doe.com"
};

console.log(usuario3); */

/* function sumar(...numeros){
  return numeros.reduce((acum, num) => acum + num, 0);
}

console.log(sumar(7,8,9,0,9,8,7,6,5,4,3,2,1)); */