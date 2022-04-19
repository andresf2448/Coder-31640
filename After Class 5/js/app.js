
const LIBROS = []

document.getElementById("formulario").addEventListener("submit", (e)=>{

    e.preventDefault();

    let titulo = document.getElementById("titulo").value;   
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;

    if(titulo == "" || descripcion == "" || precio == ""){

        alert("Todos los compas son obligatorios");
    }else {

        alert("Registro exitoso")

        const datosDelLibro = {

            titulo,
            descripcion,
            precio
        };

        LIBROS.push(datosDelLibro);
        console.log(LIBROS);

        crearLibroEnElHTML()
        document.getElementById("formulario").reset();
    }
})

function crearLibroEnElHTML() {

    let contenedor = document.getElementById("tbody");
    contenedor.innerHTML = "";

    for (let i = 0; i < LIBROS.length; i++) {
        
        let titulo = LIBROS[i].titulo;
       
        let descripcion = LIBROS[i].descripcion;
    
        let precio = LIBROS[i].precio;
      

        contenedor.innerHTML += 
        `
        <tr id="${i}">
            <td>${titulo}</td>
            <td>${descripcion}</td>
            <td>${precio}</td>
            <td><button class="btn btn-warning" onClick="editarLibrosSinRepetir(${i})">Editar</button></td>
            <td><button class="btn btn-danger" onClick="eliminarLibro(${i})">Eliminar</button></td>
        </tr>
        `
    }
}

function editarLibrosSinRepetir(i){

    let contenedor = document.getElementById(`${i}`);
    contenedor.innerHTML = "";

    let titulo = LIBROS[i].titulo;  
    let descripcion = LIBROS[i].descripcion;
    let precio = LIBROS[i].precio;

    document.getElementById("titulo").value = titulo;
    document.getElementById("descripcion").value= descripcion;
    document.getElementById("precio").value = precio;

    LIBROS.splice(i,1);

}


function eliminarLibro(i){

    let contenedor = document.getElementById(`${i}`);
    contenedor.innerHTML = "";

    LIBROS.splice(i,1);
    crearLibroEnElHTML()
}