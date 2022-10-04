const btn = document.querySelector("#boton");
const txtStar = document.querySelector("#numRondas");
const tiempo1 = document.querySelector("#jugador1 #tiempo");
const tiempo2 = document.querySelector("#jugador2 #tiempo");

const jugador1 = document.getElementById('j1');

btn.addEventListener('click', () => {
    if (txtStar.value > 0) {
        if (txtStar.value % 2 == 0) {
            alert("no puede ser par");
        }
        else {
            txtStar.readOnly = true;
            if(jugador1.checked){
                cronometro(tiempo1);
            } else{
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