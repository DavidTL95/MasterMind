
let nombre = sessionStorage.getItem("nombreUsuario");

let dificultad = sessionStorage.getItem("dificultad");

let coloresEscogidos = sessionStorage.getItem("colores");

let respuesta = [];

let arrayBoss = [];

const coloresBoss = () => {
    arrayBoss.push(coloresEscogidos[Math.floor(Math.random() * coloresEscogidos.length)]);
}

console.log(nombre)
console.log(dificultad)
console.log(coloresEscogidos)
coloresBoss()
console.log(arrayBoss)
