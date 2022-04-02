//arreglos
/* const arr1 = [1, true, false, "casa"];
const nombres = ["pepito", "maria", "agostina"]; */

//acceder a las posiciones del arreglo
/* const  numeros = [1,2,3,4,5];
console.log( numeros[0] ); 
console.log( numeros[3] );

let resultado  = numeros[1] + numeros[2];
console.log( resultado  );
*/

/* const numeros = [1, 2, 3, 4, 5];

for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
} */

/* console.log("andres".length); */

/* const nombres = ["pepito", "maria", "agostina"];
console.log(nombres.length); */

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

//recorrer arreglo
for (let i = 0; i < numeros.length; i++) {
    alert(numeros[i]);
}
 */

//agregar elementos al final
/* const nombres = ["pepito", "maria", "agostina"];
console.log(nombres.length);
nombres.push("Luis");
console.log(nombres);
console.log(nombres.length); */

//agregar elementos al principio
/* const nombres = ["pepito", "maria", "agostina"];
console.log(nombres.length);
nombres.unshift("Luis");
console.log(nombres);
console.log(nombres.length); */

/* //sacar elementos de un arreglo
const nombres = ["Luis", "Ana", "Julia", "Juan”]

//saca elementos del final del arreglo
nombres.pop()
console.log(nombres) // ["Luis", "Ana", "Julia"]

//saca elementos del principio del arreglo
nombres.shift()
console.log(nombres) // ["Ana", "Julia"] */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 3);

console.log(nombres); */
/* 
const nombres = ["Luis", "Ana", "Julia", "Juan"];

console.log( nombres.join(", ") );
// Luis, Ana, Julia

console.log( nombres.join("*") ); */

/* const perros   = ["Pupy", "Ronnie"];
const gatos = ["Mishi", "Garfield", "Zuri"];
const mascotas = perros.concat(gatos);
console.log(mascotas); */

/* const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 4);
console.log(masculinos);
 */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
let nombre = prompt("Ingrese la persona que se va a retirar");

if(nombres.includes('Rita')){
  const index = nombres.indexOf(nombre);
  const invitadosActivos = nombres.splice(index, index);
  console.log(nombres);
}else{
  console.log("Esta saliendo un fantasma");
} */

//Declaraciòn de array vacío y variable para determinar cantidad
/* const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n")); */

/* const productos = [
  {nombre: "camara", precio: 1233},
  {nombre: "televisor", precio: 1234},
  {nombre: "camiseta", precio: 1235}
]
productos.push({nombre: "camara1", precio: 12313})

console.log(productos); */

/* const productos = [
  { id: 1, producto: "Arroz" },
  { id: 2,  producto: "Fideo" },
  { id: 3,  producto: "Pan" }
];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}

for(let i = 0; i < productos.length; i++){
  console.log(productos[i].id);
  console.log(productos[i].producto);
} */

/* function mayorQue(n) {
  return (m) => m > n
}

let mayorQueDiez = mayorQue(10)

console.log( mayorQueDiez(12) )
console.log( mayorQueDiez(8) ) */

/* function asignarOperacion(op) {
  if (op == "sumar") {
      return (a, b) => a + b
  } else if (op == "restar") {
      return (a, b) => a - b
  }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )
console.log( resta(5, 3) ) */

/* function porCadaUno(arr, fn) {
  for (const el of arr) {
      fn(el);
  }
}

const numeros= [1, 2, 3, 4];

porCadaUno(numeros, console.log); */
/* function multiplicar(x){
  console.log(x*2);
}

function porCadaUno(arr, fn) {
  for (const el of arr) {
      fn(el);
  }
}

const numeros= [1, 2, 3, 4];

porCadaUno(numeros, multiplicar); */

/* const numeros = [1, 2, 3, 4, 5, 6];

[1, 2, 3, 4, 5, 6].forEach( (num)=> {
  console.log(num)
} ) */

/* const cursos = [
  {nombre: 'Javascript', precio: 15000},
  {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) */

/* let productos = [
  {nombre: "camisa", activo: true},
  {nombre: "blusa", activo: false},
  {nombre: "correa", activo: true}
]

console.log(productos.filter(x => x.activo === false)); */

/* let productos = [
  {nombre: "camisa", activo: true},
  {nombre: "blusa", activo: false},
  {nombre: "correa", activo: true}
]

console.log(productos.some(x => x.nombre === "blusaaaaaaa"));
console.log(productos.some(x => x.nombre === "blusa")); */
/* 
const cursos = [
  {nombre: 'Javascript', precio: 15000},
  {nombre: 'ReactJS', precio: 22000},
  {nombre: 'AngularJS', precio: 22000},
  {nombre: 'Desarrollo Web', precio: 16000},
];

const nombres = cursos.map((el) => el.nombre);
console.log(nombres); */

/* const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) */

/* const numeros = [ 40, 1, 5, 200 ];
numeros.sort((a, b) => a - b) //menor a mayor
numeros.sort((a, b) => b - a) //mayor a menor
*/


//A -Z
/* const items = [
  { name: 'Pikachu', price: 21 },
  { name: 'Charmander', price: 37 },
  { name: 'Pidgey', price: 45 },
  { name: 'Squirtle', price: 60 }
]
console.log(items.sort((a, b) => {
  if (a.name > b.name) {
      return -1;
  }
  if (a.name < b.name) {
      return 1;
  }
  // a es igual a b
  return 0;
})); */

//Z - A
/* const items = [
  { name: 'Pikachu', price: 21 },
  { name: 'Charmander', price: 37 },
  { name: 'Pidgey', price: 45 },
  { name: 'Squirtle', price: 60 }
]
console.log(items.sort((a, b) => {
  if (a.name > b.name) {
      return 1;
  }
  if (a.name < b.name) {
      return -1;
  }
  // a es igual a b
  return 0;
})); */

/* const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) //{id: 3, producto: "Pan", precio: 50}

const existe = productos.some(producto => producto.nombre === "Harina")
console.log(existe ) // false

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos)
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres) */;

/* let servicios = [
  {servicio: "agua", precio: 10000},
  {servicio: "luz", precio: 10500},
  {servicio: "comida", precio: 10501},
  {servicio: "aguasDelValle", precio: 10501},
]

let aguas = servicios.filter(s => s.servicio.includes("agua"));
let preciosDelAgua = aguas.map(x => x.precio);
let preciosOrdenados = preciosDelAgua.sort((a,b) => b - a);

console.log(preciosOrdenados); */

/* const hoy = new Date("December 17, 2021")

console.log(hoy.getFullYear()) // 2021
console.log(hoy.getMonth()) // 11  (diciembre)
console.log(hoy.getDay()) */