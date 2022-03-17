//var: ambito de funcion (pueden ser utilizadas en cualquier punto de la funcion)
/* console.log(x);
let x = 'var';
console.log(x); */

/* if(true){
  let x = true;
}

console.log(x);
 */

//let y const: ambito de bloque
/* console.log(x);
let x = 'var';
console.log(x); */

/* if(true){
  let x = true;
}

console.log(x); */

//diferencias

//no podemos asignar el mismo nombre a una declaracion con let
/* var x = 1;
console.log(x);
var x = 2;
console.log(x); */

/* let x = 1;
let x = 2; */

//en diferentes bloques si podemos definir una variable con el mismo nombre con let mientras que con var no es así
/* let x = 1;
if (true) {
    let x = 2;
    console.log(x);
}
console.log(x); */

/* var x = 1;
if (true) {
    var x = 2;
    console.log(x);
}
console.log(x); */


//diferencias en bucles
/* for (var i=0; i < 2; ++i) {
  console.log('Primer', i);
  for (var i=0; i < 2; ++i) {
      console.log('Segundo', i);
  }
} */

/* for (var i=0; i < 2; ++i) {
  console.log('Primer', i);
  for (var i=0; i < 2; ++i) {
      console.log('Segundo', i);
  }
} */