import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

// index =       0        1        2          3        4
const juego = ["rock", " paper", "scissor", "lizard", "spock"]
const obtenerunparametro = () => {
    const index = Math.floor(Math.random() * juego.length) // el index no es necasario que se llame así
    return juego[index]
}
const compara = (decision_usuario) => {
    const originalparam = obtenerunparametro()
    console.log(`Decides ${decision_usuario}`);
    console.log(`Ha salido ${originalparam}`)
    if (decision_usuario == originalparam) {
        console.log("Empate")
    } else if (decision_usuario == "rock" && (originalparam == "scissors" ||  originalparam == "lizard")) {
        console.log("Enhorabuena, lo aplataste")
    } else if (decision_usuario == "paper" && (originalparam == "rock")) {
        console.log("Enhorabuena, has cubierto a rock")
    } else if (decision_usuario == "paper" && (originalparam == "spock")) {
        console.log("Enhorabuena, desautorizaste a spock")
    } else if (decision_usuario == "scissors" && (originalparam == "paper")) {
        console.log("Enhorabuena has cortado a paper")
    } else if (decision_usuario == "scissors" && (originalparam == "lizard")) {
        console.log("Enhorabuena has decapacitado a lizard")
    } else if (decision_usuario == "lizard" && (originalparam == "paper")) {
        console.log("Enhorabuena devoraste a paper")
    } else if (decision_usuario == "lizard" && (originalparam == "spock")) {
        console.log("Enhorabuena envenenaste a spock")
    } else if (decision_usuario == "spock" && (originalparam == "scissors")) {
        console.log("Enhorabuena has roto a scissors")
    } else if (decision_usuario == "spock" && (originalparam == "rock")) {
        console.log("Enhorabuena has vaporizado a rock")
    } else {
        console.log("Has perdido")
    }
    
}
const adivinanza = prompt("opcion: rock, paper, scissors, lizard or spock.").toLowerCase();
    compara(adivinanza);