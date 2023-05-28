document.addEventListener('DOMContentLoaded', function() {
    const botonCopiar = document.getElementById('boton-copiar');
    let texto = document.getElementById('texto-reemplazado');

    botonCopiar.addEventListener('click', function() {
     const textoCopiado = texto.innerText;
     copiarTexto(textoCopiado);
   });
   
   function copiarTexto(texto) {
     navigator.clipboard.writeText(texto)
       .then(function() {
         alert('¡Texto copiado!');
       })
       .catch(function(error) {
         console.error('Error al copiar el texto: ', error);
       });
   }
})