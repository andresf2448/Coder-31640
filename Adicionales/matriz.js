console.log("desde el archivo Ejercicio01.JS");
let filas = 2
let columnas = 3
//
function armaMatriz(a,b) {
  matriz = new Array(a);
  for (i = 0; i <a; i++){
    matriz[i] = new Array(b);
    for (j = 0; j<b; j++){
      matriz[i][j]=0;
    }
  }
  return matriz
}
//Metemos un dato en cada posición
const matrizA = armaMatriz(filas,columnas);
matrizA[0][0] = 45;
matrizA[0][1] = 12;
matrizA[0][2] = 24;
matrizA[1][0] = 34;
matrizA[1][1] = 6;
matrizA[1][2] = 6;
console.log(matrizA)
//
const matrizB = armaMatriz(filas,columnas);
//
//Metemos un dato en cada posición
matrizB[0][0] = 33;
matrizB[0][1] = 15;
matrizB[0][2] = 19;
matrizB[1][0] = 22;
matrizB[1][1] = 8;
matrizB[1][2] = 4;
console.log(matrizB)
//
// const matrizC = armaMatriz(filas,columnas);
//
//
function sumaMatriz(a,b){
  let filas = a.length;
  let columnas = a[0].length;
  for (let i = 0; i< filas;i++){
    for (let j = 0;j< columnas;j++){
      a[i][j] = a[i][j] + b[i][j];   // Deja Resultado en la Matriz "a"
    }
  }
  return a;   
}
const matrizC = sumaMatriz(matrizA,matrizB);
console.log(matrizC)