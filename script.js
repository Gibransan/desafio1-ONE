function reemplazarVocales() {
     let textoOriginal = document.getElementById("texto-original").value;
     let textoReemplazado = "";

     for (let i = 0; i < textoOriginal.length; i++) {
          let letra = textoOriginal.charAt(i);
          let reemplazo = "";

          switch (letra) {
          case 'a':
               reemplazo = "ai";
               break;
          case 'e':
               reemplazo = "enter";
               break;
          case 'i':
               reemplazo = "imes";
               break;
          case 'o':
               reemplazo = "ober";
               break;
          case 'u':
               reemplazo = "ufat";
               break;
          default:
               reemplazo = letra;
          }

     textoReemplazado = textoReemplazado + reemplazo;
     }

     document.getElementById("texto-reemplazado").innerHTML = textoReemplazado;
}

function revertirReemplazo() {
     let textoOriginal = document.getElementById("texto-original").value;
     let textoReemplazado = "";

     textoReemplazado = textoOriginal
          .replace(/ai/g, 'a')
          .replace(/enter/g, 'e')
          .replace(/imes/g, 'i')
          .replace(/ober/g, 'o')
          .replace(/ufat/g, 'u');

     document.getElementById("texto-reemplazado").innerHTML = textoReemplazado;
     }