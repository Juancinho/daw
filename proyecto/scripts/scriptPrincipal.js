document.addEventListener('DOMContentLoaded', () => {
  const imagenes = document.querySelectorAll('.carruselContenedorImagenes img');
  const botonIzquierda = document.querySelector('.botonCarruselIzquierda');
  const botonDerecha = document.querySelector('.botonCarruselDerecha');
  let indiceImagenActual = 0;

  // Inicialmente, mostrar solo la primera imagen
  imagenes.forEach((img, index) => {
      if (index === 0) {
          img.style.display = 'block';
      } else {
          img.style.display = 'none';
      }
  });

  botonDerecha.addEventListener('click', () => {
      cambiarImagen('derecha');
  });

  botonIzquierda.addEventListener('click', () => {
      cambiarImagen('izquierda');
  });

  function cambiarImagen(direccion) {
      // Ocultar la imagen actual
      imagenes[indiceImagenActual].style.display = 'none';

      // Incrementar o decrementar el índice según el botón presionado
      if (direccion === 'derecha') {
          indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
      } else if (direccion === 'izquierda') {
          indiceImagenActual = (indiceImagenActual - 1 + imagenes.length) % imagenes.length;
      }

      // Mostrar la nueva imagen
      imagenes[indiceImagenActual].style.display = 'block';
  }
});
