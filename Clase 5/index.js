/* let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo"); */

//console.log(parrafo.innerHTML);
//console.log(parrafo.innerText);
/* console.log(div.innerHTML);
console.log(div.innerText); */

/* let perritos = document.getElementsByClassName("perritos");
console.log(perritos);

for(const perrito of perritos){
  console.log(perrito);
} */

/* let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML); */

/* let h1 = document.getElementById("identificador");

h1.innerHTML = "<h2>hola <p>a todos</p></h2>" */

/* setTimeout(() => {
  h1.innerText = "Hola mundo!"
}, 2000) */

/* let nombre = ["anDreS", "Camila", "juan"];
let nombreHomogeneo = nombre.map(x => x.toLowerCase());

console.log(nombreHomogeneo); */

/*
1. creamos el nodo
2. insertamos la info en el nodo
3. Añadir un padre
*/

/* let nombre = "andres";
let parrafo = document.createElement("p");
parrafo.innerHTML = `<h2>Hola ${nombre}</h2>`;
document.body.append(parrafo);
parrafo.className = "saludo";

let parrafo1 = document.getElementsByClassName("saludo");
parrafo1[0].remove() */

/* document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value   = 39;

let input = document.getElementById("nombre");
console.log(input.value); */

/* let padre = document.getElementById("padre");
let personas = ["Homero", "Marge", "Bart"];

for(const persona of personas){
  let li = document.createElement("li");
  li.innerHTML = persona;
  padre.prepend(li);
} */

/* const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.prepend(contenedor);
} */

//primera forma
/* let btn = document.getElementById("btn");
btn.addEventListener("click", respuesta);

function respuesta(){
  //logica para guardar en el carrito
  setTimeout(() => {
    let h1 = document.createElement("h1");
    h1.innerHTML = "Bienvenido a nuestra plataforma";
    document.body.append(h1);
  }, 3000)
} */

//segundo forma
/* let boton = document.getElementById("btn");
boton.onclick = () =>{console.log("Respuesta 2")}; */

let boton = document.getElementById("eventos");
//mousedown: con solo presionar el mouse y sin soltarlo ya se está ejecutando
/* boton.addEventListener("mousedown", () => {
  console.log("evento mousedown");
});

//mouseup: igual que el onclick pero va primero que el onclick
boton.addEventListener("mouseup", () => {
  console.log("evento mouseup");
});

boton.addEventListener("click", () => {
  console.log("evento click");
});  */

//cuando te mueves sobre el elemento
/* boton.addEventListener("mousemove", () => {
  console.log("evento mousemove");
}) */

//mouseover: cuando está spbre el elemento es solo pasar el mouse
/* boton.addEventListener("mouseover", () => {
  console.log("evento mouseover");
}) */

//mouseout: cuando salgo del elemento
/* boton.addEventListener("mouseout", () => {
  console.log("evento mouseout");
}) */

/* let input1 = document.getElementById("nombre");
let input2 = document.getElementById("edad");
input1.onkeyup = () => {console.log("keyUp")};
input2.onkeydown = () => {console.log("keyDown")}; */
/* let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");
input1.onchange = () => {console.log("valor1")};
input2.onchange = () => {console.log("valor2")}; */
/* let input1  = document.getElementById("nombre");

input1.addEventListener('input', () => {
     console.log(input1.value)
}) */

/* let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
}
 */

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value);  
}
