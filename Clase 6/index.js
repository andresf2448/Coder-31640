// persistencia en el localStorage

/* localStorage.setItem('nombre', 'vanesa');
localStorage.setItem('valor', 5);

let nombre = localStorage.getItem('nombre');
let numero = localStorage.getItem('valor');

console.log(nombre);
console.log(typeof(numero)); */

/* console.log(sessionStorage.apellido);
console.log(sessionStorage['apellido']); */

/* sessionStorage.setItem('apellido', 'ruiz'); */
/* localStorage.setItem("nombre1", "andres");
localStorage.setItem("nombre2", "camila");
localStorage.setItem("nombre3", "asdf");
localStorage.setItem("nombre4", "fdsa");
localStorage.setItem("nombre5", "ferney");



for(let i = 0; i < localStorage.length; i++){
  let clave = localStorage.key(i);

  console.log("clave " + clave + " valor: " + localStorage.getItem());
}
 */

/* let nombre = prompt("Ingrese su nombre");

sessionStorage.setItem('nombre', nombre);

let nombre1 = sessionStorage.getItem('nombre');

console.log(nombre1); */

/* localStorage.setItem('arreglo', JSON.stringify([1,2,3]));

let arreglo = localStorage.getItem('arreglo');
console.log(JSON.parse(arreglo)); */

/* localStorage.setItem('objeto', JSON.stringify({nombre: "juan", edad: 12}));
let objeto = localStorage.getItem('objeto');
console.log(objeto);
console.log(JSON.parse(objeto).nombre); */

/* const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos)); */

/* class Producto {
  constructor(obj) {
      this.nombre  = obj.producto.toUpperCase();
      this.precio  = parseFloat(obj.precio);
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
  productos.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos)
  producto.sumaIva(); */

/* let usuario = localStorage.getItem('usuario');

if(!usuario == true){
  usuario = prompt("Por favor ingrese su nombre");
  localStorage.setItem('usuario', usuario);
}else{
  alert('bienvenido nuevamente');
}
 */

/* const json = require('./prueba.json')

console.log(json); */

/* 
if(condicion){
  instrucciones a ejecutar
}else if(condicion2){
  instrucciones a ejecutar
}else{
  instrucciones a ejecutar
}
*/

/* 
bucles
for(let i = 0; i < arreglo.length; i = i + 2){
  codigo a ejecutar
}
*/
/* for(let i = 0; i < 20; i = i + 2){
  console.log(i);
} */

/* 
while(condicion){
  codigo
}

do{
  codigo
}while(condicion)
*/

/* 
const suma = (a,b) => { return a + b; }

const resta = (a,b) => a - b;

function suma(a,b){
  return a + b;
}
*/

/* function Persona(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function(){console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);}
}

const persona1 = new Persona("andres", 12);
const persona2 = new Persona("andres1", 112);
const persona3 = new Persona("andres2", 1222);
const persona4 = new Persona("andres3", 122);


class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(){
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
  }
} */

/* function principal(numero, cb){
  cb(numero);
}

principal(4, console.log); */

/* function principal(numero){
  return (numero1) => numero > numero1;
}

let funcionRetornada = principal(4);
console.log(funcionRetornada(5)); */

/* const numeros  = [1, 2, 3, 4, 5];
const porDos   = numeros.map(x => x * 2);   // porDos = [2, 4, 6, 8, 10]
const masCien  = numeros.map(x => x + 100); // porDos = [102, 104, 106, 108, 110]

const nombres = ["Ana", "Ema", "Juan", "Elia"];
const lengths = nombres.map(nombre => nombre.length); */

/* let formulario = document.getElementById('formulario');

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
  e.preventDefault();
  console.log("Formulario Enviado");
} */

//esta funcion suma dos numeros
/* function suma(a,b){

  return a + b;
}

boton.addEventListener('click', () => actuar(nombre))

function actuar(nombre){
  console.log(nombre);
} */