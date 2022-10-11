const btn = document.querySelector("#boton");
const txtStar = document.querySelector("#numRondas");
const tiempo1 = document.querySelector("#jugador1 #tiempo");
const tiempo2 = document.querySelector("#jugador2 #tiempo");
const jugador1 = document.getElementById('j1');
const ganador = document.getElementById('.contGanador');
let truno = 1;

btn.addEventListener('click', () => {
    if (txtStar.value > 0) {
        if (txtStar.value % 2 == 0) {
            alert("no puede ser par");
        }
        else {
            txtStar.readOnly = true;
            if (jugador1.checked) {
                cronometro(tiempo1);
            } else {
                cronometro(tiempo2);
            }
        }
    }
    else {
        error();
        console.log("Ingrese partidas valido");
    }
})

const error = () => {
    txtStar.style.borderColor = "red";
}

function cronometro(tiempo1) {
    tiempo1.innerHTML = 0;
    t = setInterval(() => {
        tiempo1.innerHTML = parseInt(tiempo1.innerHTML) + 1
    }, 1000)
}

const cliquear = document.querySelector(".contenedorTriki");

function evaluar(elemento) {
    if (cliquear.children[0].innerHTML == elemento &&
        cliquear.children[1].innerHTML == elemento &&
        cliquear.children[2].innerHTML == elemento) {
        contGanador.innerHTML = "Ha ganado " + elemento;
    }
    if (cliquear.children[3].innerHTML == elemento &&
        cliquear.children[4].innerHTML == elemento &&
        cliquear.children[5].innerHTML == elemento) {
        contGanador.innerHTML = "Ha ganado " + elemento;
    }
    if (cliquear.children[6].innerHTML == elemento &&
        cliquear.children[7].innerHTML == elemento &&
        cliquear.children[8].innerHTML == elemento) {
        contGanador.innerHTML = "Ha ganado " + elemento;
    }
    if (cliquear.children[0].innerHTML == elemento &&
        cliquear.children[3].innerHTML == elemento &&
        cliquear.children[6].innerHTML == elemento) {
        contGanador.innerHTML = "Ha ganado " + elemento;
    }
    if (cliquear.children[1].innerHTML == elemento &&
        cliquear.children[4].innerHTML == elemento &&
        cliquear.children[7].innerHTML == elemento) {
        contGanador.innerHTML = "Ha ganado " + elemento;
    }
    if (cliquear.children[2].innerHTML == elemento &&
        cliquear.children[5].innerHTML == elemento &&
        cliquear.children[8].innerHTML == elemento) {
        contGanador.innerHTML = "Ha ganado " + elemento;
    }
    if (cliquear.children[0].innerHTML == elemento &&
        cliquear.children[4].innerHTML == elemento &&
        cliquear.children[8].innerHTML == elemento) {
        contGanador.innerHTML = "Ha ganado " + elemento;
    }
    if (cliquear.children[2].innerHTML == elemento &&
        cliquear.children[4].innerHTML == elemento &&
        cliquear.children[6].innerHTML == elemento) {
        contGanador.innerHTML = "Ha ganado " + elemento;
    }
}

function marcar(obj) {
    if (truno == 1) {
        if (obj.target.innerHTML == "") {
            obj.target.innerHTML = "X";
            truno = 2;
        }
    }
    else {
        if (obj.target.innerHTML == "") {
            obj.target.innerHTML = "O";
            truno = 1;
        }
    }
    evaluar(obj.target.innerHTML);
}