document.addEventListener('DOMContentLoaded', function() {

/*PARA PONERLE A TODOS LOS CONTENEDORES LA MISMA ALTURA, EN CONCRETO LA MAXIMA DE TODOS*/
let contenedores = document.querySelectorAll('article');

alturas = new Set();

for(let contenedor of contenedores){
    alturas.add(contenedor.clientHeight); 
}
let maxHeight = Math.max(...alturas);

for(let contenedor of contenedores){
    contenedor.style.height = maxHeight+'px';
}

});