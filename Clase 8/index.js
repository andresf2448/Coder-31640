/* console.log("petciion de compra");

setTimeout(() => {
  console.log("entrega");
}, 3000)

console.log("actividades"); */

/* const btn = document.querySelector('#boton')
const message = document.querySelector('#mensaje')

btn.addEventListener('click', () => {
    message.classList.add('active')

    setTimeout(() => {
        message.classList.remove('active')
    }, 2500)
}) */

/* for (let letra of "hola") {
  setTimeout(() => {
      console.log(letra)
  }, 1000)
}

for (let letra of "mundo") {
  setTimeout(() => {
      console.log(letra)
  }, 3000)
}
 */

/* function multiply (x, y) {    
  return x * y;
}

function printSquare (x) {    
  let s = multiply(x, x);    
  console.log(s);
}

printSquare(5);
 */

/* console.log("Inicia proceso")

setTimeout(()=> {
    console.log("Mitad de proceso")
}, 0)

console.log("Fin proceso") */

/* setInterval(() => {
  console.log("hola");
}, 1000)
console.log("fin"); */

/* const interval = setInterval(() => {
    try{
      reporte();
    }catch {
      //en caso de que el proceso falle
      clearInterval(interval)
      console.log("el proceso fallo")
      sent_sentry(error)
    }
}, 8000000000) */

/* let counter = 0

const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000) */

/* function reporte(){
  //instrucciones para enviar el reporte diario a la empresa
} */

/* console.log("arranca");

const fin = setTimeout(()=>{
  console.log("llega al fin");
},1000)

clearTimeout(fin); */

/* setInterval(() => {
  console.log("hola");
}, 1000) */

/* const eventoFuturo = () => {
  return new Promise((resolve, reject) => {
    //codigo de la promesa
    resolve("entrega exitosa")
  })
}

console.log(eventoFuturo()); */

/* const eventoFuturo = (validacion) => {
  return new Promise((resolve, reject) => {
    if(validacion === true){
      resolve("promesa resuelta")
    }else{
      reject("promesa rechazada")
    }
  })
}

console.log(eventoFuturo(false)); */

/* const eventoFuturo = (res) => {
  return new Promise( (resolve, reject) => {
      setTimeout( () => {
          res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
      }, 2000)
  })
}

eventoFuturo(true).then((respuesta) => {
  console.log(respuesta);
}).catch((error) => {
  console.log(error);
}).finally(()=>{
  console.log("proceso terminado");
}) */

/* fetch('https://jsonplaceholder.typicode.com/posts/')
.then((response) => response.json())
.then((json) => console.log(json))
.catch((error) => {
  console.log(error);
}); */

//console.log(fetch('https://jsonplaceholder.typicode.com/posts/'));

//console.log(fetch('https://jsonplaceholder.typicode.com/posts/').then(res => res.json()));

/* fetch('https://jsonplaceholder.typicode.com/posts/')
.then(res => res.json())
.then(data => {
  let primer = data[0];
  console.log(primer.title);
  console.log(primer.body);
}) */

/* const lista = document.querySelector("#listado");

fetch('https://jsonplaceholder.typicode.com/posts/')
.then(res => res.json())
.then(data => {
  data.forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `
    lista.append(li);
  })
}) */

/* fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Coder',
    body: 'estudiando las promesas',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((json) => console.log(json)); */
//const lista = document.querySelector('#listado');

/* fetch("./productos.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `;

      lista.append(li);
    });
  }).catch((error) => {
    console.log(error);
  }); */
const lista = document.querySelector("#listado");

const pedirPosts = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();

  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `;
    lista.append(li);
  });
};

pedirPosts();
