function cargarLocalStorage(){
  let productos = [
    {id: 1, producto: "Pan"},
    {id: 2, producto: "leche"},
    {id: 3, producto: "arina"},
    {id: 4, producto: "cafe"}
  ];

  localStorage.setItem('arreglo', JSON.stringify(productos));
}

function modificarProducto(id, nombreProducto, nombreArreglo){
  let listaProductos = JSON.parse(localStorage.getItem(nombreArreglo));
  let elemento = listaProductos.find(elemento => elemento.id === id);

  elemento.producto = nombreProducto;
  localStorage.setItem(nombreArreglo, JSON.stringify(listaProductos));
}

function eliminar(id, nombreArreglo){
  let listaProductos = JSON.parse(localStorage.getItem(nombreArreglo));

  listaProductos = listaProductos.filter(elemento => elemento.id != id);
  localStorage.setItem(nombreArreglo, JSON.stringify(listaProductos));
}