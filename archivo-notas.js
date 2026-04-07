document.addEventListener("DOMContentLoaded", function() {
    // 1. Buscamos todas las notas dentro de tu contenedor principal
    const notas = document.querySelectorAll('.noticias-lista .noticia');
    
    // 2. Si hay más de 20...
    if (notas.length > 20) {
      // 3. Empezamos desde la nota 21 (índice 20) hasta el final
      for (let i = 20; i < notas.length; i++) {
        // La ocultamos forzosamente
        notas[i].style.setProperty('display', 'none', 'important');
        
        // 4. Aprovechamos para "apagar" las imágenes de esas notas ocultas
        // Así no gastan datos en el celular del lector
        const imagenes = notas[i].querySelectorAll('img');
        imagenes.forEach(img => {
          if(img.hasAttribute('src')) {
            img.setAttribute('data-src', img.getAttribute('src'));
            img.removeAttribute('src');
          }
        });
      }
    }
    console.log("Sistema de archivo automático: " + notas.length + " notas procesadas.");
  });
