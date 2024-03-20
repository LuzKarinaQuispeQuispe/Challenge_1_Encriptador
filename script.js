
const textArea = document.querySelector(".texto-encriptar");
const resultado = document.querySelector(".Resultado");



function encriptar(texto_encrip) {
    const matriz_texto = new Map([
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]);

    texto_encrip = texto_encrip.toLowerCase();

    for (const [key, value] of matriz_texto) {
        texto_encrip = texto_encrip.split(key).join(value);
    }
    return texto_encrip;
}

function desencriptar(texto_desencrip) {
    const matriz_texto = new Map([
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ]);

    texto_desencrip = texto_desencrip.toLowerCase();

    for (const [key, value] of matriz_texto) {
        texto_desencrip = texto_desencrip.split(key).join(value);
    }

    return texto_desencrip;
}

function boton_Encriptar(){
    resultado.value = encriptar(textArea.value);
}
function boton_Desencriptar(){
    resultado.value = desencriptar(textArea.value);   
}

function limpiar(){
    textArea.value = "";
    resultado.value = "";
}