document.addEventListener('DOMContentLoaded', () => {
  const contenedorCarrusel = document.getElementsByClassName('contenedor-carrusel')[0];
  const imagenes = contenedorCarrusel.getElementsByTagName('img');
  const textos = document.querySelectorAll('.carruselContenedorTextos h3');
  const botonIzquierda = document.getElementById('botonCarruselIzquierda');
  const botonDerecha = document.querySelector('.botonCarruselDerecha');
  let indiceImagenActual = 0;

  // Inicialmente, mostrar solo la primera imagen y texto
  textos.forEach((txt, index) => {
    if (index === 0) {
      txt.style.display = 'block';

    }
  });
  imagenes[0].style.display = 'block';

  const colores = ['#2a1763', '#131c58', '#58064f'];


  botonDerecha.addEventListener('click', () => {
    cambiarImagen('derecha');
  });

  botonIzquierda.addEventListener('click', () => {
    cambiarImagen('izquierda');
  });

  function cambiarImagen(direccion) {
    // Ocultar la imagen actual
    imagenes[indiceImagenActual].style.display = 'none';
    textos[indiceImagenActual].style.display = 'none';

    // Incrementar o decrementar el índice según el botón presionado
    if (direccion === 'derecha') {
      indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;


    } else if (direccion === 'izquierda') {
      indiceImagenActual = (indiceImagenActual - 1 + imagenes.length) % imagenes.length;
    }

    // Mostrar la nueva imagen
    imagenes[indiceImagenActual].style.display = 'block';
    textos[indiceImagenActual].style.display = 'block';
    let fondo = `linear-gradient(to bottom, #ffffff 60%, ${colores[indiceImagenActual]}  60%)`;

    contenedorCarrusel.style.background = fondo;

  }
});
