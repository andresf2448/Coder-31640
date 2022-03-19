/* let number = 5;
let cadena = "hola";
let valor = true;
let valor1 = false; */

/* 
Estructura del condicional if

if(condicion){
  intrucciones a ejecutar en caso de que la condicion sea verdadera
}

if(condicion){
  intrucciones a ejecutar en caso de que la condicion sea verdadera
}else{
  instrucciones a ejecutar en caso de que la condicion sea falsa
}

if(condicion){
  intrucciones a ejecutar en caso de que la condicion sea verdadera
}else if(condicion1){
  intrucciones a ejecutar en caso de que la condicion sea verdadera
}else if(condicion2){
  intrucciones a ejecutar en caso de que la condicion sea verdadera
}else{
  instrucciones a ejecutar en caso de que la condicion sea falsa
}
*/

/* console.log("hola" === "hold");
console.log("hola" == "asdf"); */
/* console.log("5" == 5);
console.log("5" === 5); */
/* let valor = true;
let valor1 = true;


if(valor === valor1){
  console.log("hola perfecto todo funciona bien");
} */

/* let unNumero = 5;

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero != 5){
    console.log("vas a ver este mensaje");
}

// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){ 
    console.log("no vas a ver este mensaje");
} */

/* let hijoEstudia = false;

if(hijoEstudia){
  console.log("Puedes salir a jugar");
}else{
  console.log("No puedes salir a jugar");
  console.log("Hay tabla");
} */

/* let edad = "20";


if(typeof(edad) == number){
  if(edad < 18){
    
  }
}



console.log(typeof(5));
console.log("number" == typeof(6)); */

/* if(edad < 18){
  console.log("no puedes entrar a la fiesta");
}else if(edad >= 18){
  console.log("puedes entrar con un adulto responsable");
}else{
  console.log("Puede entrar solo");
} */

/* let precio = 100;

if (precio < 20) {
    console.log("El precio es menor que 20");
}
else if (precio < 50) {
    console.log("El precio es menor que 50");
}
else if (precio < 100) {
    console.log("El precio es menor que 100");
}
else {
    console.log("El precio es mayor que 100");
} */

/* console.log(typeof("hola")) */

/* let nombre = "andres";
let permiso = (nombre === "andwwwwres");

if(permiso){
  console.log("siga");
}else{
  console.log("pare");
} */

/* console.log("3" !== 3); */

/* let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") || (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
} */
                            
/* console.log(true && (false && true) ); */

/* 
condicion1 && condicion2 para que sea true siempre deben ser ambos true
condicion1 || condicion2 para que sea true al menos uno debe ser true
*/

/* console.log((3 * 5) - 8); 
console.log(true && (false || true)); */

/* let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
} */

/* for(let i = 10; i > 0; i--){
  console.log(i);
} */

/* for (let i = 0; i < 10; i++) {
  alert(i);
} */

/* // Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}

ingresarNumero = 4
i = 3
resultado = 8

"4 X 2 = 8" */

/* for (let i = 1; i <= 20; i++) {
  // En cada repetición solicitamos un nombre.
  let ingresarNombre = prompt("Ingresar nombre");
  // Informamos el turno asignado usando el número de repetición (i).
  alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

i = 3
ingresarNombre = "valeria"
" Turno  N° 2 Nombre: valeria" */
/* for (let i = 1; i <= 10; i++) {
  //Si la variable i es igual 5 interrumpo el for. 
  if(i == 5){
      break;
  }
  alert(i);
} */

/* for (let i = 1; i <= 10; i++) {
  //Si la variable i es 5, no se interpreta la repetición
  if(i == 5){
      continue;
  }
  alert(i);
} */

/* let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
} */

/* let contrasena = prompt("Ingresar su contrasena");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(contrasena != "1234"){
    alert("El usuario ingresó una contrasena incorrecta");
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    contrasena = prompt("Ingresar su contrasena");
}

console.log("entramos a la aplicacion"); */

/* let repetir = false;
do{
console.log("¡Solo una vez!");
}while(repetir)

while(repetir){
  console.log("¡Solo una vez!");
} */

/* let contrasena = prompt("Ingresar su contrasena");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(contrasena != "1234"){
    alert("El usuario ingresó una contrasena incorrecta");
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    contrasena = prompt("Ingresar su contrasena");
} */

/* do{
  console.log("hola")
}while(true) */
/* while(false){
  console.log("hola");
} */

let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }

   entrada = prompt("Ingresar un nombre");
}
