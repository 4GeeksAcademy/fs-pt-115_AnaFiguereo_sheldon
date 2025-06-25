import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

// index =       0        1        2          3        4
const juego = ["rock", " paper", "scissor", "lizard", "spock"]
const obtener_un_parametro = () => {
    const index = Math.floor(Math.random() * juego.length) // el index no es necasario que se llame así
    return juego[index]
}
const compara = (decision_usuario) => {
    const original_param = obtener_un_parametro()
    console.log(`Decides ${decision_usuario}`);
    console.log(`Ha salido ${original_param}`)
    if (decision_usuario == original_param) {
        return console.log("Empate")
    }
    if (decision_usuario == "rock" && (original_param == "scissors" ||  original_param == "lizard")) {
        return console.log("Enhorabuena, lo aplataste")
    }
    if (decision_usuario == "paper" && (original_param == "rock")) {
        return console.log("Enhorabuena, has cubierto a rock")
    }
    if (decision_usuario == "paper" && (original_param == "spock")) {
        return console.log("Enhorabuena, desautorizaste a spock")
    }
    if (decision_usuario == "scissors" && (original_param == "paper")) {
        return console.log("Enhorabuena has cortado a paper")
    }
    if (decision_usuario == "scissors" && (original_param == "lizard")) {
        return console.log("Enhorabuena has decapitado a lizard")
    }
    if (decision_usuario == "lizard" && (original_param == "paper")) {
        return console.log("Enhorabuena devoraste a paper")
    }
    if (decision_usuario == "lizard" && (original_param == "spock")) {
        return console.log("Enhorabuena envenenaste a spock")
    }
    if (decision_usuario == "spock" && (original_param == "scissors")) {
        return console.log("Enhorabuena has roto a scissors")
    }
    if (decision_usuario == "spock" && (original_param == "rock")) {
        return console.log("Enhorabuena has vaporizado a rock")
    }
        console.log("Has perdido")
}
const adivinanza = prompt("opcion: rock, paper, scissors, lizard or spock.").toLowerCase();
    compara(adivinanza);