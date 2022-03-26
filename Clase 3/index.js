/* 
estructura de las funciones

funcion sencillia sin parametros
function nombreFuncion(){
  codigo a ejecutar por la funcion
}

function dinamica con parametros
function transportador(arg1, arg2, ...){
  codigo a ejecutar utilizando los argumentos
}

function que retorna
function funcionRetorna(arg1, ...){
  codigo a ejecutar

  return resultado
}

*/

/* function saludo(){
  console.log("Hola a todos!");
}

saludo(); */

/* function solicitarNombre(){
  let nombreIngresado   = prompt("Ingresar nombre")
  alert("El nombre ingresado es " + nombreIngresado)
}

solicitarNombre(); */

/* function transporte(precio, nombre){
  console.log(`Tu hijo ${nombre} ha sido transportado seguramente con un pago de ${precio}`);
}

transporte(500, "camilo");
transporte(1000, "juanito");
transporte(1000, "juanito1");
transporte(1000, "juanito2");
transporte(1000, "juanito3");
transporte(1000, "juanito4"); */

/* function suma(num1, num2){
  console.log(num1 + num2);
}

suma(1, 2); */

/* let num1 = 3;
let num2 = 4;
let resultado = num1 + num2; */

/* function mostrar(mensaje){
  console.log(mensaje);
}

mostrar("chao"); */

/* function sumar(primerNumero, segundoNumero) {
  console.log(primerNumero + segundoNumero);
}

let resultado = sumar(5, 8);

console.log("este es el resultado", resultado); */

/* function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
      case "+":
          return primerNumero + segundoNumero;
          break;
      case "-":
          return primerNumero - segundoNumero;
          break;
      case "*":
          return primerNumero * segundoNumero;
          break;
      case "/":
          return primerNumero / segundoNumero;
          break;
      default:
          return 0;
          break;
  }
}

console.log(calculadora(10, 5, "*")); */

/* function saludo(){
  console.log("1");
  return
  console.log("2");
}

saludo(); */

/* let nombre = "andres";


console.log(nombre); */

/* function suma(){
  let resultado = 3;
}

function resta(){
  let resultado = 4;
} */

/* let numero = 1;

{
  let nombre = "andres";
} */

/*
funciones anonimas
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }

console.log( suma(15,20) )
console.log( resta(15,5) ) */

/*
funciones flecha

const suma  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;

console.log( suma(15,20) )
console.log( resta(20,5) ) */

/* const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
=
resta(suma(precioProducto, precioProducto * 0.21), descuento)

resta(4 , 2) */


/* const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"}
                   
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle) */

/* let obj1 = 1;
let obj2 = obj1;

obj2 = 5;

|    1    |     |   5   | 
    obj1           obj2



let obj1 = {nombre: "andres", edad: 5};
let obj2 = obj1;

obj2.nombre = "camilo";

console.log(obj1);

|  {nombre: "camilo", edad: 5}  |     |    |  */
          /* obj1 obj2  */

/* var a = {nombre: "andres"}
var b = {...a};

b.nombre = "camil";
console.log(a); */


/* const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"}
                   
console.log(persona1["nombre"])
console.log(persona1["edad"])
console.log(persona1["calle"]) */

/* function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad 	 = edad;
  this.calle  = calle;
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
const persona5 = new Persona("Masdfrge", 36, "Av. Siempreviva 742");
const persona6 = new Persona("Marasdfge", 36, "Av. Siempreviva 742");
const persona7 = new Persona("Margasdfe", 36, "Av. Siempreviva 742");
const persona8 = new Persona("Marasdfge", 36, "Av. Siempreviva 742");

console.log(persona2.nombre); */

/* function Persona(literal) {
  this.nombre = literal.nombre;
  this.edad   = literal.edad;
  this.calle  = literal.calle;
}
const persona1 = new Persona({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" }); */

/* function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad   = edad;
  this.calle  = calle;
  this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar(); */


/* recorrer objetos con for
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
} */


/* class Persona{
  constructor(nombre, edad, calle) {
      this.nombre = nombre;
      this.edad   = edad;
      this.calle  = calle;
  }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
console.log(persona1.nombre); */

/* class Persona{
  constructor(nombre, edad, calle) {
      this.nombre = nombre;
      this.edad   = edad;
      this.calle  = calle;
  }

  hablar(){
      console.log("HOLA SOY "+ this.nombre);
  }
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar(); */

class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }

  sumaIva() {
      this.precio = this.precio * 1.21;
  }

  vender() {
      this.vendido = true;
  }
}

const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("arz", "12");

console.log(producto1.vendido);
producto1.vender();
console.log(producto1.vendido);
console.log(producto2.vendido);
producto2.vender();
console.log(producto2.vendido);


/* const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};

for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
} */