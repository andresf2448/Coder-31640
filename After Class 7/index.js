/*
  el await detiene el flujo hasta recibir respuesta
async function suma(){
  let resultado = await fetch();

  `<h1>${resultado}</h1>`
} */

//https://rickandmortyapi.com/api/character

async function getCharacters() {
  try {
    let response = await axios("https://rickandmortyapi.com/api/character");

    response = response.data.results;
    const contenedor = document.getElementById("contened");

    response.forEach((character) => {
      const item = document.createElement("div");

      item.innerHTML = `
      <h1>${character.name}</h1>
      <p>${character.status}</p>
      <p>${character.gender}</p>
      <img src="${character.image}">
      <hr/>
    `;

      contenedor.append(item);
    });
  } catch (error) {
    console.log("aca", error);
  }
}

getCharacters();
