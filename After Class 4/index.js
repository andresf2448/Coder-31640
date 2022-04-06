//map, some, filter
/* 
let info = [
  {nombre: "cafe", precio: 1000, disponible: true},
  {nombre: "pan", precio: 800, disponible: true},
  {nombre: "leche", precio: 2000, disponible: true}
]

let result = info.filter(x => x.nombre == "cafe");
let result1 = info.filter(x => x.precio > 900);
console.log(result);
console.log(result1);

console.log(info.map(x => x.nombre));
console.log(info.some(x => x.precio > 3000));

let productosDisponibles = info.filter(x => x.disponible === true);
console.log(productosDisponibles); */

/* class Producto{
  constructor(id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

let productoVirtuales = [
  new Producto(1, "computador", 1000010),
  new Producto(1, "computador1", 1001000),
  new Producto(1, "computador2", 1020000),
]

console.log(productoVirtuales[0].nombre); */

class Producto{
  constructor(id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

let productoVirtuales = [];

for(let i = 0; i < 2; i++){
  let id = prompt("ingrese el id del producto");
  let nombre = prompt("ingrese el nombre del producto");
  let precio = prompt("ingrese el precio del producto");

  productoVirtuales.push(new Producto(id, nombre, precio));
}

[{nombre: "1234", id: 5}, {nombre: "1231234", id: 6}]

function eliminarProducto(id){
  let index = productoVirtuales.indexOf(productoVirtuales.find(x => x.id === id))

  productoVirtuales.splice(index, 1);
}

eliminarProducto(6);