/* eslint-disable */
import "bootstrap";
import "./style.css";

const sujetos = ["Mi perro", "Mi novia", "Un mendigo", "Un alien"];
const acciones = ["me robó", "compró", "mordió", "puso pegamento a"];
const objetos = ["mis deberes", "mi portatil", "mi coche", "mis zapatillas"];
const lugares = [
  "llegando al sitio",
  "al salir de casa",
  "al salir del trabajo",
  "en casa de mi abuela"
];

function generarExcusa() {
  const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
  const accion = acciones[Math.floor(Math.random() * acciones.length)];
  const objeto = objetos[Math.floor(Math.random() * objetos.length)];
  const lugar = lugares[Math.floor(Math.random() * lugares.length)];
  return `${sujeto} ${accion} ${objeto} ${lugar}`;
}

window.onload = function() {
  document.getElementById("excusa").textContent = generarExcusa();
};
