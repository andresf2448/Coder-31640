// AFTER CLASS 31 MARZO
// Login 

// Objeto literal

const persona = {

    nombre: 'Juan',
    apellido: 'Perez',
    edad: 40,
    hijos:{
        hijo1:{
            nombre: 'Roman',
            apellido: 'Perez',
            edad: 12
        },
        hijo2:{
            nombre: 'Luis',
            apellido: 'Perez',
            edad: 10
        }
    }
}

console.log(persona.nombre);
console.log(persona.hijos.hijo1.nombre);

// Ejercicios de logica de programacion

/*
    Programa una función que cuente el número
    de caracteres de una cadena de texto, 
    por ejemplo: miFuncion("Hola Mundo") devolverá 10.
*/

/* let numero = 10;

let array = [10,20,30,40]
console.log(array.length)
console.log(array[1]) */


/* function contadorCaracteres(cadena="") {

    if(isNaN(cadena)){

        let arrayCaracteres = cadena.split("")
        let contadorCaracteres = cadena.length

        console.log(arrayCaracteres);
        console.log(contadorCaracteres);
    }else{
        console.log("No es un numero");
    }
}

contadorCaracteres("javascript") */

/*
    Programa una función que repita un texto X veces,
    pe. miFuncion('Hola Mundo', 3) devolverá Hola 
    Mundo Hola Mundo Hola Mundo.
*/

/* function repiteTexto(texto,veces){

    for (let i = 0; i < veces; i++) {
        
        console.log(texto)
    }
}

repiteTexto("Hola Mundo",3)
repiteTexto("Hola coder house",100) */


/*  Ejemplo de POO por composicion y por agregacion
    Bateria
    chip
    Smartphone
*/

class Bateria {

    mAh;
    marca;

    constructor(mAh,marca){
        this.mAh = mAh;
        this.marca = marca;
    }

}

class Chip{

    empresa;
    numero;

    constructor(empresa,numero){
        this.empresa = empresa;
        this.numero = numero;
    }
}


class Smartphone{
    
    modelo;
    bateria;
    nroChip;
    chips;
    
    constructor(modelo, cantMAh, marcaBateria){
        
        this.modelo = modelo;
        this.bateria = new Bateria(cantMAh,marcaBateria);
        this.nroChip = 0;
        this.chips = [];
        
    }
    
    agregarChip(chip){
        
        if(this.nroChip < 2){
            
            this.chips.push(chip);
            this.nroChip++;
            
        }else{
            console.log("No se pueden agregar mas chips")
        }
    }
}


let iphone = new Smartphone("Iphone",2000,"Samsung");
console.log(iphone);
let entel = new Chip("Entel","123456789");
let tigo = new Chip("Tigo","4536456565");

iphone.agregarChip(entel);
iphone.agregarChip(tigo);

console.log(iphone);


// Ejemplo de Login y carrito de compra con metodos de pago
// Les deje la tarea de unificar el login con el acceso al
// carrito de compra
/*
let nombre = prompt("Ingrese su nombre");

let usuario = prompt("Ingrese su usuario:"); // Luis
let contra = prompt("Ingrese su contraseña:"); // 3344

alert(`${nombre} Corrobore los datos por favor`)

// BBDD
let user = '';
let pass = '';
let intentos = 3;

function login(usuario,contrasenia,intentos){

    if(!(usuario === '' && contrasenia === '')){

        while(intentos > 0 && (usuario !== user || contrasenia !== pass)){

            user = prompt("Ingrese su usuario:"); // Lui
            pass = prompt("Ingrese su contraseña:"); // 3344

            if(user === usuario && pass === contrasenia){

                alert("Bienvenido, acceso permitido");

            }else{

                alert(`Usuario o contraseña incorrectos, te quedan ${intentos--} intentos`);
            }
        }

    }
}

login(usuario, contra, intentos)


class Articulo{

    constructor(prenda,precio){

        this.prenda = prenda;
        this.precio = parseInt(precio);
    }

    precioTotal(){

        return this.precio * 1.21;
    }
}

const producto1 = new Articulo("Camisa",2000);
const producto2 = new Articulo("Pantalon",3000);
const producto3 = new Articulo("zapatillas",9000);

let ropaElegida = [

    producto1,
    producto2,
    producto3
]

let nombre = prompt("Ingresa tu nombre para una mejor experiencia: ");
let apellido = prompt("Ingresa tu apellido para una mejor experiencia: ");

let eleccion = prompt(
    `Hola ${nombre}, bienvenido a la tienda de ropa Gucci, elegi que prenda quieres comprar:
    Digite 1 para ${producto1.prenda}, precio ${producto1.precio}
    Digite 2 para ${producto2.prenda}, precio ${producto2.precio}
    Digite 3 para ${producto3.prenda}, precio ${producto3.precio}`
)

let total = 0;

function eleccionDeRopa(){

    while(eleccion != "NO"){

        console.log(`${nombre} tus prendas elegidas son ${ropaElegida[eleccion-1].prenda}`)

        total += ropaElegida[eleccion-1].precioTotal();

        eleccion = prompt(
            `${nombre}, queres seguir comprando?
            Elegi que prena deseas comprar o de lo contrario digita NO
            Digite 1 para ${producto1.prenda}, precio ${producto1.precio}
            Digite 2 para ${producto2.prenda}, precio ${producto2.precio}
            Digite 3 para ${producto3.prenda}, precio ${producto3.precio}`
        )

        console.log(`Total a pagar ${total}`)
    }
}

eleccionDeRopa();


function pagar(){

    let formaPago = parseInt(prompt(`${nombre}, el monto a pagar es ${total}, ¿que forma de pago deseas?
    1 para Debito
    2 para Credito: `))

    if(formaPago === 1){
        
        let pago = prompt('Ingresa el numero de la tarjeta debito: ');

        alert(`${nombre}, tu pago fue exitoso, gracias por comprar en la tienda de ropa Gucci
        Detalles de la compra: 
        Compra a nombre de ${nombre} ${apellido}
        Total abonado ${total}`);

    }else if(formaPago === 2){
            
            let pago = prompt('Ingresa el numero de la tarjeta credito: ');
    
            let cuotas = parseInt(prompt(`${nombre}, cuantas cuotas deseas?
            1 para 3 cuotas con un recargo del 10%,
            2 para 6 cuotas con un recargo del 15%,
            3 para 12 cuotas con un recargo del 20%`));

            let recargo = 0;
            let cuota = 0;

            switch(cuotas){
                case 1:
                    recargo = total * 0.10;
                    total += recargo;

                    cuota = total / 3;

                    alert(`${nombre}, tu pago fue exitoso, gracias por comprar en la tienda de ropa Gucci
                    Detalles de la compra: 
                    Compra a nombre de ${nombre} ${apellido}
                    Total abonado ${total}`);
                    break;
                case 2:
                    recargo = total * 0.15;
                    total += recargo;
                
                    cuota = total / 6;

                    alert(`${nombre}, tu pago fue exitoso, gracias por comprar en la tienda de ropa Gucci
                    Detalles de la compra: 
                    Compra a nombre de ${nombre} ${apellido}
                    Total abonado ${total}`);
                    break;
                case 3:
                    recargo = total * 0.20;
                    total += recargo;
    
                    cuota = total / 12;

                    alert(`${nombre}, tu pago fue exitoso, gracias por comprar en la tienda de ropa Gucci
                    Detalles de la compra: 
                    Compra a nombre de ${nombre} ${apellido}
                    Total abonado ${total}`);
                    break;
            }
    
    }else{
        alert("No se pudo realizar el pago, intente nuevamente");
    }
}
*/
