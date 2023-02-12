let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");

botonesArmas.forEach((boton) => {
  boton.addEventListener("click", iniciarTurno);
});

const getRandomNumber = (max) => Math.floor(Math.random() * max);

function iniciarTurno(e) {
  let eleccionPC = getRandomNumber(3);
  let eleccionUsuario = e.currentTarget.id;

  // piedra => 0
  // papel => 1
  // tijera => 2

  if (eleccionPC === 0) {
    eleccionPC = "malphite";
  } else if (eleccionPC === 1) {
    eleccionPC = "teemo";
  } else if (eleccionPC === 2) {
    eleccionPC = "gwen";
  }

  // piedra vence a tijera
  // tijera vence a papel
  // papel vence a piedra
  // si son iguales es empate

  if (
    (eleccionUsuario === "malphite" && eleccionPC === "gwen") ||
    (eleccionUsuario === "gwen" && eleccionPC === "teemo") ||
    (eleccionUsuario === "teemo" && eleccionPC === "malphite")
  ) {
    ganaUsuario();
  } else if (
    (eleccionPC === "malphite" && eleccionUsuario === "gwen") ||
    (eleccionPC === "gwen" && eleccionUsuario === "teemo") ||
    (eleccionPC === "teemo" && eleccionUsuario === "malphite")
  ) {
    ganaPC();
  } else {
    empate();
  }

  mensaje.classList.remove("disabled");
  contenedorEleccionUsuario.innerText = eleccionUsuario;
  contenedorEleccionPC.innerText = eleccionPC;

  if (puntosUsuario === 5 || puntosPC === 5) {
    if (puntosUsuario === 5) {
      instrucciones.innerText = "Ganaste y ni sabes como, anda paya bobo";
    }

    if (puntosPC === 5) {
      instrucciones.innerText = "Perdiste una partida contra Bots larva";
    }

    elegiTuArma.classList.add("disabled");
    reiniciar.classList.remove("disabled");
    reiniciar.addEventListener("click", reiniciarJuego);
  }
}

function ganaUsuario() {
  puntosUsuario++;
  contenedorPuntosUsuario.innerText = puntosUsuario;
  contenedorGanaPunto.innerText = "Fue Puro KS - GANASTE";
}

function ganaPC() {
  puntosPC++;
  contenedorPuntosPC.innerText = puntosPC;
  contenedorGanaPunto.innerText = "Te Gankearon Papu - PERDISTE";
}

function empate() {
  contenedorGanaPunto.innerText = "Diveaste, Moriste Pero Mataste - EMPATE";
}

function reiniciarJuego() {
  reiniciar.classList.add("disabled");
  elegiTuArma.classList.remove("disabled");
  mensaje.classList.add("disabled");

  puntosUsuario = 0;
  puntosPC = 0;

  contenedorPuntosUsuario.innerText = puntosUsuario;
  contenedorPuntosPC.innerText = puntosPC;

  instrucciones.innerText = "El primero en llegar a 5 puntos gana.";
}

const ELECCIONES = {
  MALPHITE: "malphite",
  TEEMO: "teemo",
  GWEN: "gwen",
};

const CONDICION_VICTORIA = {
  [ELECCIONES.MALPHITE]: {
    [ELECCIONES.GWEN]: true,
  },
  [ELECCIONES.GWEN]: {
    [ELECCIONES.TEEMO]: true,
  },
  [ELECCIONES.TEEMO]: {
    [ELECCIONES.MALPHITE]: true,
  },
};

const quienGana = (eleccionUsuario, eleccionPC) => {
  if (CONDICION_VICTORIA[eleccionUsuario] === eleccionPC) return "empate";
  if (CONDICION_VICTORIA[eleccionUsuario][eleccionPC]) return "ganaste";
  return "perdiste";
};

const resultado = quienGana(ELECCIONES.MALPHITE, ELECCIONES.GWEN);
console.log(resultado);

const primos = ["nico", "enzo", "marcos"];

primos.forEach((primo) => {
  console.log(primo);
});
