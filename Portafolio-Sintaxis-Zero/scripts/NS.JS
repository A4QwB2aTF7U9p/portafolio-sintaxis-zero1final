let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
let maxIntentos = 3;

function verificarNumero() {

    let campo = document.getElementById("numeroUsuario");
    let numero = campo.value;

    
    if (numero === "") {
        alert("Debe ingresar un número");
        return;
    }

    
    numero = Number(numero);

    
    if (numero < 1 || numero > 10) {
        document.getElementById("mensaje").innerHTML =
        "⚠️ Solo puedes usar números del 1 al 10";
        return;
    }

    intentos++;

    if (numero === numeroSecreto) {
        document.getElementById("mensaje").innerHTML =
        "🎉 ¡Ganaste!";

        document.getElementById("intentos").innerHTML =
        "Lo lograste en " + intentos + " intento(s)";
        return;
    }

    if (intentos < maxIntentos) {

        if (numero < numeroSecreto) {
            document.getElementById("mensaje").innerHTML =
            "El número es mayor";
        } else {
            document.getElementById("mensaje").innerHTML =
            "El número es menor";
        }

        document.getElementById("intentos").innerHTML =
        " Intento " + intentos + " / " + maxIntentos;

    } else {

        document.getElementById("mensaje").innerHTML =
        " Perdiste. El número era " + numeroSecreto;

        document.getElementById("intentos").innerHTML =
        "Se acabaron los intentos";

        document.getElementById("modo").innerHTML =
        " Modo desafío terminado";
    }

    campo.value = "";
    campo.focus();
}

function nuevoJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;

    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("intentos").innerHTML = "";
    document.getElementById("numeroUsuario").value = "";

    document.getElementById("modo").innerHTML =
    "Modo desafío: 3 intentos";
}
