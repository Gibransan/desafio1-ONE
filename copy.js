document.addEventListener('DOMContentLoaded', function() {
    const botonCopiar = document.getElementById('boton-copiar');
    let texto = document.getElementById('texto-reemplazado');

    function copiarTexto() {
         texto.select();
         navigator.clipboard.writeText(texto.value)
         .then(function() {
              alert('¡Copiado')
         })
         .catch(function(error) {
              console.error('Error al copiar: ', error);
         });
    }
    botonCopiar.addEventListener('click', copiarTexto);

    texto.addEventListener('input', function() {
         texto = document.getElementById('texto-reemplazado');
    });
})