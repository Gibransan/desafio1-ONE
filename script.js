function reemplazarVocales() {
    let originalText = document.getElementById("original-text").value;
    let encriptedText = "";

    for (let i = 0; i < originalText.length; i++) {
        let letra = originalText.chartAt(i);
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

        encriptedText += reemplazo;
    }

    document.getElementById("encriptedText").innerHTML = encriptedText;
}