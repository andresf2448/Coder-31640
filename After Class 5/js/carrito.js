let BBDD = [
    {
        id: 1,
        nombre: 'Camiseta',
        precio: 20,
        cantidad:1
    },
    {
        id: 2,
        nombre: 'Pantalon',
        precio: 30,
        cantidad:1
    },
    {
        id: 3,
        nombre: 'Zapatos',
        precio: 40,
        cantidad:1
    },
    {
        id: 4,
        nombre: 'Gorra',
        precio: 50,
        cantidad:1
    }
]

let carrito = [];
let total = 0;

function renderrizarEnElHTML(){

    let tienda = document.getElementById('tienda');

    for (let i = 0; i < BBDD.length; i++) {
        
        tienda.innerHTML += `

        <div>
            <h3>${BBDD[i].nombre}</h3>
            <p>$${BBDD[i].precio}</p>
            <p>${BBDD[i].cantidad}</p>
            <button class="btn btn-primary" id="${BBDD[i].id}" onclick="agregarProductoAlCarrito(${i})">Agregar al carrito</button>
        </div>
        `
    }
}

renderrizarEnElHTML()

function agregarProductoAlCarrito(i){

    let producto = BBDD[i];
    let exite = false;

    for (let i = 0; i < carrito.length; i++) {
        
        if(carrito[i].id === producto.id){
            exite = true;
            carrito[i].cantidad++;
            console.log(carrito)
        }
        
    }

    if(!exite){
        producto.cantidad = 1;
        carrito.push(producto);
        console.log(carrito)
    }

    renderizarCarrito()
}


function renderizarCarrito(){

    let carritoHTML = document.getElementById("carrito");
    carritoHTML.innerHTML = "";

    for (let i = 0; i < carrito.length; i++) {
        carritoHTML.innerHTML += `
            <div class="Producto">
                <h3>${carrito[i].nombre}</h3>
                <p>Precio: $${carrito[i].precio}</p>
                <p>Cantidad
                : ${carrito[i].cantidad}</p>
                <button data-id="${carrito[i].id}" onclick="eliminarProductoDelCarrito(${i})">Eliminar del carrito</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Comprar
                </button>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Detalles de tu compra</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-6">  
                                        <h3>Producto</h3>

                                        <ul>
                                            <li>Nombre: ${carrito[i].nombre}</li>
                                            <li>Precio: $${carrito[i].precio}</li>
                                            <li>Cantidad: ${carrito[i].cantidad}</li>
                                        </ul>

                                        <h4>Total: $${carrito[i].precio * carrito[i].cantidad}</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <h4>Gracias por tu compra</h4>
                            </div>
                    </div>
                </div>
            </div>     
        `
    }
}

function eliminarProductoDelCarrito(i){

    carrito.splice(i,1);
    renderizarCarrito();
}

