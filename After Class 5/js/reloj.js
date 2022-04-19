const mostrarReloj = ()=> {

    let fecha = new Date();


    let hora = formatoHora(fecha.getHours());

    let min = formatoHora(fecha.getMinutes());

    let sec = formatoHora(fecha.getSeconds());


    document.getElementById('hora').innerHTML = 
    `
    ${hora}: ${min}: ${sec}
    `
}

const formatoHora = (hora)=> {

    if(hora < 10){

        hora = '0' + hora;
    }

    return hora;
}

setInterval(mostrarReloj,1000)