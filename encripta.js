
// Función que aplica el cifrado Cesar
function cifrado(texto, desplazamiento) {
    let resultado = "";
    desplazamiento = desplazamiento % 26;

    for (let i = 0; i < texto.length; i++) {
        let cesar = texto.charCodeAt(i);

        // Considera las mayusculas
        if (cesar >= 65 && cesar <= 90) {
            resultado += String.fromCharCode(((cesar - 65 + desplazamiento) % 26) + 65);
        }
        // Considera las minusculas
        else if (cesar >= 97 && cesar <= 122) {
            resultado += String.fromCharCode(((cesar - 97 + desplazamiento) % 26) + 97);
        } else {

            resultado += texto.charAt(i);
        }
    }
    return resultado;
}

// Pedir al usuario el ingreso del texto en pantalla
let texto = prompt("Ingresa el texto que desea sea cifrado: ");
// Desplazar cuatro posiciones
let desplazamiento = 4 ;
    // Encriptar el texto con cifrado Cesar
    let textoCifrado = cifrado(texto, desplazamiento);
    // Mostrar el texto en pantalla
    document.getElementById ("resultado").innerHTML = "El resultado del texto cifrado es: " + textoCifrado;
